import { useEffect } from 'react';

const usePrefetch = (assetUrls) => {
  useEffect(() => {
    const fetchWithRetry = async (url, retries = 3) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        return response;
      } catch (error) {
        if (retries > 0) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(fetchWithRetry(url, retries - 1));
            }, 1000);
          });
        }
        throw error;
      }
    };

    const processQueue = () => {
      if (assetUrls.length === 0) return;

      const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));

      idleCallback(async () => {
        const url = assetUrls.shift();
        try {
          await fetchWithRetry(url);
        } catch (e) {
          console.error(e);
        } finally {
          processQueue();
        }
      });
    };

    processQueue();
  }, [assetUrls]);
};

export default usePrefetch;

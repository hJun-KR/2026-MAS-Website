import { useEffect } from 'react';

const usePrefetch = (assetUrls) => {
  useEffect(() => {
    const urlsToProcess = [...assetUrls];

    const fetchWithRetry = async (url, retries = 3) => {
      try {
        const response = await fetch(url);
        if (response.status === 503) throw new Error('RETRY');
        if (!response.ok) throw new Error();
        return response;
      } catch (error) {
        if (retries > 0) {
          await new Promise(res => setTimeout(res, 1500));
          return fetchWithRetry(url, retries - 1);
        }
      }
    };

    const processQueue = async () => {
      while (urlsToProcess.length > 0) {
        const url = urlsToProcess.shift();
        await fetchWithRetry(url);
        await new Promise(res => setTimeout(res, 800));
      }
    };

    const startPrefetch = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => processQueue());
      } else {
        setTimeout(processQueue, 2000);
      }
    };

    window.addEventListener('load', startPrefetch);
    return () => window.removeEventListener('load', startPrefetch);
  }, [assetUrls]);
};

export default usePrefetch;
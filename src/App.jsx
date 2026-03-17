import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import usePrefetch from './hooks/usePrefetch';
import dailyLifeList from '../data/dailyLifeList';
import prizeList from '../data/prizeList';

const Main = lazy(() => import('./pages/Main'));
const OurPrize = lazy(() => import('./pages/OurPrize.jsx'));
const Prize = lazy(() => import('./pages/Prize.jsx'));
const Members = lazy(() => import('./pages/Members'));
const Projects = lazy(() => import('./pages/Projects'));

function App() {
  const backgroundAssets = [
    ...dailyLifeList.map(item => item.image),
    ...prizeList.map(item => item.image)
  ];

  usePrefetch(backgroundAssets);

  return (
    <Suspense fallback={<div className="loading-spinner" />}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ourPrize" element={<OurPrize />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { HashRouter, Routes, Route } from "react-router";
import FictionPage from './FictionPage.tsx';
import FAQPage from './FAQPage.tsx';
import SetupPage from './SetupPage.tsx';
import AboutPage from './AboutPage.tsx';
import MicrostoryListPage from './MicrostoryListPage.tsx';
import MicrostoryPage from './MicrostoryPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<FictionPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/microstories" element={<MicrostoryListPage />} />
        <Route path="/microstory/:storyName" element={<MicrostoryPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

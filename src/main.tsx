import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from "react-router";
import FictionPage from './FictionPage.tsx';
import FAQPage from './FAQPage.tsx';
import SetupPage from './SetupPage.tsx';
import AboutPage from './AboutPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books" element={<FictionPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

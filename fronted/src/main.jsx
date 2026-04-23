import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import CountriesList from './component/CountriesList';
import CountryDetail from './component/CountryDetail';
import { ThemeProvider } from './component/ThemeContext';
import './index.css'; // optional global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/:country" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HousingPage from './pages/HousingPage';
import Error404Page from './pages/Error404Page';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/housing/:id" element={<HousingPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Logement from './pages/D_Fiche-Logement';
import A_Propos from './pages/A_propos';
import Error from './pages/D_404';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/A_Propos" element={<A_Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

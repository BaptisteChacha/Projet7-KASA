import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Logement from './pages/D_Fiche-Logement'
import A_Propos from './pages/A_propos'
import Error from './pages/D_404'
//import detail from './Components/Détail'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
                <Route path='/A_Propos' element={<A_Propos />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

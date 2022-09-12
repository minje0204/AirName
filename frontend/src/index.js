import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Entry from './pages/Entry'
import Survey from './pages/Survey'
import Loading from './pages/Loading'
import Rcmnd from './pages/Rcmnd'
import NameCard from './pages/NameCard'
import FinReport from './pages/FinReport'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/entry" element={<Entry />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/rcmnd" element={<Rcmnd />}></Route>
        <Route path="/namecard" element={<NameCard />}></Route>
        <Route path="/finreport" element={<FinReport />}></Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

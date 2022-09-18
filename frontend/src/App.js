import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import {
  EntryKo,
  EntryEn,
  FinReport,
  Home,
  Loading,
  NameCard,
  Rcmnd,
  Survey
} from './pages';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-ko" element={<EntryKo />} />
          <Route path="/entry-en" element={<EntryEn />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/rcmnd" element={<Rcmnd />} />
          <Route path="/namecard" element={<NameCard />} />
          <Route path="/finreport/:username" element={<FinReport />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

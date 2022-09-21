import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import {
  EntryKo,
  FinReport,
  Home,
  Loading,
  NameCard,
  Rcmnd,
  Survey,
  Error404
} from './pages';
import FeedbackBtn from './components/feedback';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-ko" element={<EntryKo />} />
          {/* <Route path="/entry-en" element={<EntryEn />} /> */}
          <Route path="/survey" element={<Survey />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/rcmnd" element={<Rcmnd />} />
          <Route path="/namecard" element={<NameCard />} />
          <Route path="/finreport/:username" element={<FinReport />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <FeedbackBtn />
    </ThemeProvider>
  );
}

export default App;

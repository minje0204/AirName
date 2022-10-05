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
  Survey,
  Error404
} from './pages';
import FeedbackBtn from './components/feedback';
import theme from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IsFillContextProvider } from './hooks/useIsFillContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <IsFillContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry-ko" element={<EntryKo />} />
            <Route path="/entry-en" element={<EntryEn />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/rcmnd" element={<Rcmnd />} />
            <Route path="/namecard" element={<NameCard />} />
            <Route path="/finreport/:username/:birth" element={<FinReport />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </IsFillContextProvider>
      <FeedbackBtn />
    </ThemeProvider>
  );
}

export default App;

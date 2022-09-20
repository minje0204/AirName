import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// 카카오톡 공유하기 API KEY setting
const KAKAO_KEY = process.env.REACT_APP_KAKAO_API_KEY;
window.Kakao.init(KAKAO_KEY);

// GA ID setting
const TRACKING_ID = process.env.	REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
RaactGA.initialize(TRACKING_ID);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

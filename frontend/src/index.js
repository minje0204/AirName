import { hydrate, render } from 'react-dom';
import App from './App';
import './index.css';

// 카카오톡 공유하기 API KEY setting
const KAKAO_KEY = process.env.REACT_APP_KAKAO_API_KEY;
window.Kakao.init(KAKAO_KEY);

const $root = document.getElementById('root');
const renderOrHydrate = $root.hasChildNodes() ? hydrate : render;

renderOrHydrate(<App />, $root);

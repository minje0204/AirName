// const BASE_URL = 'https://airname.shop/api';
const BASE_URL = 'http://127.0.0.1:8000';

const API = {
  POST: `${BASE_URL}/posts`,
  ENTRY: `${BASE_URL}/rec/sound/`,
  SURVEY: `${BASE_URL}/rcmnd`,
  SELETED: `${BASE_URL}/selected`,
  FINREPORT: `${BASE_URL}/report`,
  LOADING: `${BASE_URL}/loading/`,
  NAMECHECK: `${BASE_URL}/rec/check`,
  SPEAKING: `${BASE_URL}/speaking`
};

export default API;

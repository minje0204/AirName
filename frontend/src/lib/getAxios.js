import axios from 'axios';
// import cookies from 'js-cookie';

const getAxios = (url) => {
  axios
    .get(`${url}`)
    .then((response) => {
      // 성공 핸들링
      console.log('success!', response);
    })
    .catch((error) => {
      // 에러 핸들링
      console.log('some errors', error);
    })
    .then(() => {
      // 항상 실행되는 영역
    })

};

export default getAxios;




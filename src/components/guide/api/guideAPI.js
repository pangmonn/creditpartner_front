import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

// 토큰을 localStorage에서 가져와서 설정
// client.defaults.headers.common['Authorization'] = localStorage.getItem('login-token');

const BASE_URL = "http://localhost:3000"

const guideURLs = {
  /*
  1: '/api/guide/1',
  2: '/api/guide/2',
  3: '/api/guide/3',
  */

  1: `${BASE_URL}/guide1`,
  2: `${BASE_URL}/guide2`,
  3: `${BASE_URL}/guide3`
};

const config = {
    headers: { 
        "Content-Type": "application/json", 
        Authorization: localStorage.getItem("login-token") 
    },
};

export const getGuide = (guide) => {
  let URL;
  // console.log(Number(guide));
  switch (Number(guide)) {
    case 1:
      URL = guideURLs[1];
      // console.log(URL);
      break;
    case 2:
      URL = guideURLs[2];
      break;
    case 3:
      URL = guideURLs[3];
      break;
    default:
      break;
  }
  return new Promise((resolve, reject) => {
    client
      .get(URL, config) // config를 요청에 추가
      .then((response) => {
        // console.log(response.data.items);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postGuide = (form, guide) => {
  const data = JSON.stringify(form);
  console.log(data);
  let URL;
  switch (Number(guide)) {
    case 1:
      URL = guideURLs[1];
      break;
    case 2:
      URL = guideURLs[2];
      break;
    case 3:
      URL = guideURLs[3];
      break;
    default:
      break;
  }
  return client.post(URL, data, config).then(function (response) {
    console.log(response);
    return response;
  }).catch(function (error) {
    console.log(error);
    return error;
  });
};  

import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const BASE_URL = "http://localhost:3000"

const test_guideURLs = {
  /*
  1: '/api/guide/1',
  2: '/api/guide/2',
  3: '/api/guide/3',
  */

  1: `${BASE_URL}/guide1`,
  2: `${BASE_URL}/guide2`,
  3: `${BASE_URL}/guide3`
};

const guideURL = '/api/guide';

const config = {
    headers: { 
        "Content-Type": "application/json", 
        Authorization: localStorage.getItem("login-token") 
    },
};

export const getGuide = () => {
  const URL = guideURL;  

  return new Promise((resolve, reject) => {
    client
      .get(URL, config) // config를 요청에 추가
      .then((response) => {
        console.log(response.data.items);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postGuide = (form) => {
  const data = JSON.stringify(form);
  const URL = guideURL;

  console.log(data);

  return client.post(URL, data, config).then(function (response) {
    console.log(response);
    return response;
  }).catch(function (error) {
    console.log(error);
    return error;
  });
};  

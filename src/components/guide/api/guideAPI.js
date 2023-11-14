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

export const getGuide = () => {
  const URL = guideURL;  

  return new Promise((resolve, reject) => {
    client
      .get(URL, { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } })
      .then((response) => {
        console.log(response.data.items);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postGuide = async (form) => {
  const data = JSON.stringify(form);
  const URL = guideURL;

  console.log(data);

  try {
    const response = await client.post(URL, data, { headers: { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};  

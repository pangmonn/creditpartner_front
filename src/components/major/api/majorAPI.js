import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const test_majorURL = 'http://localhost:3000/major_list';

const majorURL = '/api/major';

const config = { 
    headers : { 
        "Content-Type": 'application/json', 
        Authorization: localStorage.getItem("login-token") 
    } 
};

export const getMajor = () => {
    const URL = test_majorURL; // 학과 이름을 URL에 추가

    // 서버에 get 요청
    return new Promise((resolve, reject) => {
        client.get(URL, config)
            .then(response => {
                // console.log(response.data.items);
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};
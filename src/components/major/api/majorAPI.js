import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const test_majorURL = 'http://localhost:3000/major_list';

const majorURL = '/api/major';

export const getMajor = (majorNum) => {
    const URL = majorURL;
    // console.log(typeof(major_name));

    // 서버에 get 요청
    return new Promise((resolve, reject) => {
        client.get(URL, {
            ...{ headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } },
            params: { "majorNum" : majorNum }
        })
            .then(response => {
                // console.log(response.data.items);
                resolve(response.data);
            })
            .catch(error => {
                // console.error("서버 응답 오류:", error);
                reject(error);
            });
    });
};

import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const config = { 
    headers : { 
        "Content-Type": 'application/json', 
        Authorization: localStorage.getItem("login-token") 
    } 
};

const majorURL = '/api/major';

export const getMajor = (majorName) => {
    const URL = majorURL; // 학과 이름을 URL에 추가

    // 서버에 get 요청
    return new Promise((resolve, reject) => {
        // URL: 선택한 학기에 따라 결정
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

export const postMajorInfo = (form, semester) => {
    const data = JSON.stringify(form);
    console.log(data);
    let URL;
    switch(Number(semester)) {
        case 1:
            URL = semesterURL1;
            break;
        case 2:
            URL = semesterURL2;
            break;
        case 3:
            URL = semesterURL3;
            break;
        case 4:
            URL = semesterURL4;
            break;
        case 5:
            URL = semesterURL5;
            break;
        case 6:
            URL = semesterURL6;
            break;
        default:
            break;
    }
    client.post(URL, data, config).then(function (response) {
            console.log(response);
            return response;
            }).catch(function (error) {
                console.log(error);
                return error;
                });
    
}
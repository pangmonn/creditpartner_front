import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();


const fakeURL_credits = 'http://localhost:3000/credits1';

const semesterURL1 = '/api/credits/1';
const semesterURL2 = '/api/credits/2';
const semesterURL3 = '/api/credits/3';
const semesterURL4 = '/api/credits/4';
const semesterURL5 = '/api/credits/5';
const semesterURL6 = '/api/credits/6';


export const getClasses = (semester) => {
    console.log(semester);
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
    return new Promise((resolve, reject) => {
        client.get(URL, { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } })
            .then(response => {
                console.log(response);
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const postClasses = (form, semester) => {
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
    client.post(URL, data, { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } }).then(function (response) {
            console.log(response);
            return response;
            }).catch(function (error) {
                console.log(error);
                return error;
                });
    
}
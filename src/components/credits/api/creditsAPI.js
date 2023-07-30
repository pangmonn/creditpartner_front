import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const config = { headers : { "Content-Type": 'application/json' } };

const semesterURL1 = 'http://localhost:8080/credits1';
const semesterURL2 = 'http://localhost:8080/credits2';
const semesterURL3 = 'http://localhost:8080/credits3';
const semesterURL4 = 'http://localhost:8080/credits4';
const semesterURL5 = 'http://localhost:8080/credits5';
const semesterURL6 = 'http://localhost:8080/credits6';


export const getClasses = (semester) => {
    let URL;
    switch(semester) {
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
        client.get(URL, config)
            .then(response => {
                // console.log(response.data.items);
                resolve(response.data.items);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const postClasses = (form, semester) => {
    const data = { items: form };
    let URL;
    switch(semester) {
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
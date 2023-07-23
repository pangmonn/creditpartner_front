import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const config = { headers : { "Content-Type": 'application/json' } };

let url;

export const getClasses = (semester) => {
    switch(semester) {
        case '1':
            url = 'http://localhost:3000/credits1';
            break;
        case '2':
            url = 'http://localhost:3000/credits2';
            break;
        default:
            break;
    }
    return new Promise((resolve, reject) => {
        client.get(url, config)
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
    switch (semester) {
        case '1':
            client.post('http://localhost:3000/credits1', data, config).then(function (response) {
                console.log(response);
                return response;
            }).catch(function (error) {
            console.log(error);
            return error;
            });
            break;
        case '2':
            client.post('http://localhost:3000/credits2', data, config).then(function (response) {
                console.log(response);
                return response;
            }).catch(function (error) {
            console.log(error);
            return error;
            });
            break;
        default:
            break;
    }
    
}
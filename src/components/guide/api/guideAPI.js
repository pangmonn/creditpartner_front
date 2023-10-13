import axios from 'axios';

axios.defaults.withCredentials = true;
const client = axios.create();

const config = { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } };

const guideURL1 = '/api/guide/1';
const guideURL2 = '/api/guide/2';
const guideURL3 = '/api/guide/3';


export const getClasses = (guide) => {
    let URL;
    switch(Number(guide)) {
        case 1:
            URL = guideURL1;
            break;
        case 2:
            URL = guideURL2;
            break;
        case 3:
            URL = guideURL3;
            break;
        default:
            break;
    }
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

export const postClasses = (form, guide) => {
    const data = JSON.stringify(form);
    console.log(data);
    let URL;
    switch(Number(guide)) {
        case 1:
            URL = guideURL1;
            break;
        case 2:
            URL = guideURL2;
            break;
        case 3:
            URL = guideURL3;
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
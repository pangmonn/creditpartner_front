import client from './client';

const config = { headers : { "Content-Type": 'application/json' } };

export const login = ({ userId, password }) => {
    const data = { 'id': userId, 'pwd': password };
    client.post('/api/login', data, config).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        console.log(error.response.status);
    });
}

export const join = (form) => {
    const data = { 'name': form.userName, 'id': form.userId, 'pwd': form.password };
    client.post('/api/join', data, config).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        return error;
    });
}

import client from './client';

const config = { headers : { "Content-Type": 'application/json' } };

export const login = async (form) => {
    
    const data = { 'username': form.userId, 'password': form.password };
    console.log(data);

    return new Promise((resolve, reject) => {
        client.post('/api/login', data, config).then(function (response) {
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem('login-token', response.data.token);
            }
            resolve(response)
    
        }).catch(function (error) {
            console.log(error);
            reject(error);
        });
    })
    
}

export const join = (form) => {
    const data = { 'name': form.userName, 'id': form.userId, 'pwd': form.password };
    client.post('/api/join', data, config).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        return error.response.status;
    });
}

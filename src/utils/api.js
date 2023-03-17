const jsonRequest = (url, options = {}) => {
    return fetch('http://localhost:3000' + url, {
        headers: {'content-type': 'application/json'},
        ...options
    }).then((response) => response.json());
};

export const fetchUsers = () => {
    const options = {
        method: 'GET'
    };

    const request = jsonRequest('/users', options);

    return request;
};

export const saveUser = (user) => {
    const options = {
        body: JSON.stringify(user),
        method: 'PUT'
    };

    const request = jsonRequest(`/users/${user.id}`, options);

    return request;
};

export const deleteUser = (user) => {
    const options = {
        method: 'DELETE'
    };

    const request = jsonRequest(`/users/${user.id}`, options);

    return request;
};

export const createUser = (user) => {
    const options = {
        body: JSON.stringify(user),
        method: 'POST'
    };

    const request = jsonRequest(`/users`, options);

    return request;
};

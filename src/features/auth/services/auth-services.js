import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";

export const loginService = async ({ username, password }) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, { username, password });
    return response.data.token;
};

export const registerService = async ({ username, email, password }) => {
    await axios.post(`${BASE_URL}/users`, {
        username,
        email,
        password,
        name: { firstname: username, lastname: '' },
        address: { city: '', street: '', number: 0, zipcode: '', geolocation: { lat: '0', long: '0' } },
        phone: '0',
    });
    return loginService({ username, password });
};
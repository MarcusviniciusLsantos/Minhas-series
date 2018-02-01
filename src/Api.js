import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const loadGenres = () => api.get('genres');

const apis = {
    loadGenres: () => api.get('genres')
};

export default apis;
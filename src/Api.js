import axios from 'axios';
import NewSeries from './NewSeries';

const api = axios.create({
    baseURL: 'http://localhost:3003/'
});

export const loadGenres = () => api.get('genres');
export const saveSeries = (newSeries) => api.post('series', newSeries)

const apis = {
    loadGenres: () => api.get('genres'),
    saveSeries: saveSeries
};

export default apis;
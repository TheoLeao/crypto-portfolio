import axios from 'axios';
export const fetcherUsingFetch = (...args) => fetch(...args).then(res => res.json());
export const fetcherUsingAxios = url => axios.get(url).then(res => res.data)
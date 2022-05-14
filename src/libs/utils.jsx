import axios from 'axios';
//swr utils
export const fetcherUsingFetch = (...args) => fetch(...args).then(res => res.json());
export const fetcherUsingAxios = url => axios.get(url).then(res => res.data);
export const fetcherUsingAxiosHandlingError = async url => {
    const res = await axios.get(url);
    if (res.status !== 200) {
        const error = new Error('An error occurred while fetching the data.');
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    return res.data;
}
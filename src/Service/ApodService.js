import {API_URL1, API_KEY} from '../Config/Config';

const url = [`${API_URL1}?api_key=${API_KEY}`]

export const fetchApod = () => {
    return fetch(url).then(response => response.json());
}
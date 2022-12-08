import axios from 'axios';

axios.defaults.baseURL = "https://hn.algolia.com/api/v1"

export const getArticlesById = async (id) => {
    const response = await axios.get(`/items/${id}`)
    return response.data;
}
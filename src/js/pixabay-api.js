import axios from 'axios';

// !!! Встав сюди свій ключ, отриманий на https://pixabay.com/api/docs/
const API_KEY = '57403396-8609a7cc7d5223c59879c502e';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get('', { params });
  return response.data;
}

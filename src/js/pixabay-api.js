import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50348687-5aaca11934b8ceb1ae22977b7';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

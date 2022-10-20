import { get } from './requests.js';

const URL = 'https://stellar-view.herokuapp.com/api/v1/quiz';

export async function getQuiz(category) {
  const response = await get(`${URL}/${category}/1`);
  return response;
}

export async function getCategories() {
  const response = await get(`${URL}`);
  return response;
}

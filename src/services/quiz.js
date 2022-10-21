import { get } from './requests.js';

const URL = 'https://stellar-view.herokuapp.com/api/v1/quiz';

export async function getQuiz(category, level) {
  const response = await get(`${URL}/${category}/${level}`);
  return response;
}

export async function getCategoriesAndLevels() {
  const response = await get(`${URL}`);
  return response;
}

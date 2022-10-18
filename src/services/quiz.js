import { get } from './requests.js';

const URL = 'https://stellar-view.herokuapp.com/api/v1/quiz';

export async function getQuiz(category) {
  console.log(category);
  const response = await get(`${URL}/${category}`);
  return response;
}

export async function getCategories() {
  const response = await get(`${URL}`);
  return response;
}

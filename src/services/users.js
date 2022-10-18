import { get } from './requests';

const URL = 'https://stellar-view.herokuapp.com/api/v1/users';

export async function getUserById(id) {
  const response = await get(`${URL}/${ id }`);
  response.user = response.data;
  return response;
}

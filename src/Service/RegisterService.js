import { post, get } from "../Utils/request";

export const postRegister = async (option) => {
  const result = await post(`users`, option);
  return result;
}

export const checkRegister = async (email) => {
  const result = await get(`users?email=${email}`);
  return result;
}


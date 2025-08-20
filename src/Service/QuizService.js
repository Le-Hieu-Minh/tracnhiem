import { post } from "../Utils/request";

export const postQuiz = async (option) => {
  const result = await post(`answers`, option);
  return result;
}
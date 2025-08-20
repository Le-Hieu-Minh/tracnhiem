import { get } from "../Utils/request";


export const getListQuestion = async () => {
  const result = await get(`questions`);
  return result;
}

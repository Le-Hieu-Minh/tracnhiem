import { get } from "../Utils/request";


export const getResult = async (id) => {
  const result = await get(`answers/${id}`);
  return result;
}

export const getListQuestionRs = async (id) => {
  const result = await get(`questions?topicId=${id}`);
  return result;
}

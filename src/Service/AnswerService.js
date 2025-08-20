import { get } from "../Utils/request";
import Cookies from "js-cookie"

export const getUserById = async () => {
  const UserId = Cookies.get('id');
  const result = await get(`answers?userId=${UserId}`);
  return result;
}


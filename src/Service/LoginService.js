import { get } from "../Utils/request";


export const getLogin = async (email, password) => {
  const result = await get(`users?email=${email}&password=${password}`);
  return result;
}





// export const creatProduct = async (data) => {
//   const result = await post(`products`, data);
//   return result;
// }

// export const deleteProduct = async (id) => {
//   const result = await del(`products`, id);
//   return result
// }

// export const editProduct = async (id, data) => {
//   const result = await patch(`products`, id, data);
//   return result;
// }
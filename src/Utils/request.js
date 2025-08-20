const API_DOMAIN = `http://localhost:3002/`;

export const get = async (path) => {
  const respone = await fetch(API_DOMAIN + path)
  const result = await respone.json()
  return result;
}

export const post = async (path, option) => {
  const respone = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(option)
  })
  const result = await respone.json();
  return result;
}

// export const del = async (path, id) => {
//   const respone = await fetch(API_DOMAIN + path + `/${id}`, {
//     method: "DELETE",
//   })
//   const result = await respone.json();
//   return result
// }

// export const patch = async (path, id, data) => {
//   const respone = await fetch(API_DOMAIN + path + `/${id}`, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//   const result = await respone.json();
//   return result;
// }
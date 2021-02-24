import axios from "axios";

export const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-type": "application/json",
  },
});

export const get = (url, params) => {
  return http
    .get(url, { params })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

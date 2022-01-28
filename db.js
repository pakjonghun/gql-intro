import { data } from "./graphql/resolvers";

export const deleteMovies = (id) => {
  const i = data.findIndex((v) => v.id === id);
  if (i < 0) throw new Error("no data");
  const target = data[i];
  data.splice(i, 1);
  return target;
};

export const updateMovie = ({ id, ...rest }) => {
  const target = data.find((i) => i.id === id);
  if (!target) throw new Error("no data");
  const newData = { ...target, ...rest };
  return newData;
};

export const addMovie = (newData) => {
  const id = Math.floor(Math.random() * 5000);
  const newPerson = { id, ...newData };
  data.push(newPerson);
  return newPerson;
};

import fetch from "cross-fetch";

const url = (limit) =>
  `https://yts.mx/api/v2/list_movies.json?limit=${limit | 1}`;

export const getData = async (limit) => {
  console.log(limit);
  const newUrl = url(limit);
  console.log(limit, newUrl);
  const {
    data: { movies },
  } = await (await fetch(newUrl)).json();
  return movies;
};

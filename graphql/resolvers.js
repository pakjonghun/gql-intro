import { addMovie, deleteMovies, getData, updateMovie } from "../db";

const pak = {
  id: 1,
  name: "pak",
  age: 1,
};
const min = {
  id: 2,
  name: "min",
  age: 2,
};
export const data = [pak, min];

const resolvers = {
  Query: {
    person: (_, { id }) => {
      return data.find((d) => d.id === id);
    },
    people: () => data,
    getData: (_, { limit }) => getData(limit),
  },
  Mutation: {
    delete: (_, { id }) => {
      return deleteMovies(id);
    },
    update: (_, args) => {
      return updateMovie(args);
    },
    addMovie: (_, args) => {
      return addMovie(args);
    },
  },
};

export default resolvers;

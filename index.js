const { ApolloServer, gql } = require("apollo-server");
import resolvers from "./graphql/resolvers";

const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    age: Int!
  }

  type Query {
    person(id: Int!): Person
    people: [Person]
    getData(limit: Int): [Data]!
  }

  type Mutation {
    delete(id: Int!): Person
    update(id: Int!, name: String, age: Int): Person
    addMovie(name: String!, age: Int!): Person
  }

  type Data {
    id: Int!
    title: String!
    year: Int!
    summary: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server is running on ${url}`);
});

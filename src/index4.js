import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
  type Query {
    greeting(name: String); String!
    add(numbers: [Float!]!): Float!
    grades: [Int!]!
    me: User!
    post: Post!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}`;
      } else {
        return "Hello user";
      }
    },
    add(parent, args, ctx, info) {
      if (args.numberslength === 0) {
        return 0;
      }
      return args.numbers.reduce((acc, curr) => acc + curr);
    },
    grades() {
      return [99, 80, 93];
    },
    me() {
      return {
        id: "123879183",
        name: "Koji",
        email: "koji@email.com",
      };
    },
    post() {
      return {
        id: "2371988",
        title: "ascbjasca",
        body: "ansckjnsacl",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("The server is up!"));

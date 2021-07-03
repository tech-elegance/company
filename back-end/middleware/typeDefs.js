const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar ISODate

  type Query {
    plans: [Plan]!
    employees: [Employee]!
  }

  type Mutation {
    createContect(
      first_name: String!
      last_name: String!
      email: String!
      message: String!
      date: ISODate
      plan: ID!
    ): Contect!
  }

  type Plan {
    id: ID
    title: String
  }

  type Position {
    id: ID
    title: String
    department: ID
  }

  type Department {
    id: ID
    title: String
  }

  type Employee {
    id: ID
    first_name: Local
    last_name: Local
    profile_url: String
    detail: Local
    position: [Position]
  }

  type Local {
    th: String
    en: String
  }

  type Contect {
    id: ID
    first_name: String!
    last_name: String!
    email: String!
    message: String!
    date: ISODate
    plan: ID!
  }
`;
module.exports = typeDefs;

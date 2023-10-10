import { gql } from "@apollo/client";

// mutation deleteClient->*name of mutation*($id->*id variable name in mongodb*: ID!->*set type to ID*)
const DELETE_PROJECT = gql`
  mutation deleteProject($id: String!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: String!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };

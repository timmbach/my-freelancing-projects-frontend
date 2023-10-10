import { gql } from "@apollo/client";

// mutation deleteClient->*name of mutation*($id->*id variable name in mongodb*: ID!->*set type to ID*)
const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };

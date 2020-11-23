import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation(
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    )
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        firstName
        secondName
      }
    }
  }
`;

export const CURRENT_USER = gql`
  query {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`;

export const EDIT_USER = gql`
  mutation(
    $id: Int!
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String
  ) {
    editUser(
      id: $id
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      firstName
      secondName
      email
    }
  }
`;

export const PROCESS_LIST = gql`
  query {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`;

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($input: UserInput!) {
    register(input: $input) {
      token
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_PLANS = gql`
  query getPlans {
    getPlans {
      id
      name
      tokens
      description
      price
    }
  }
`;

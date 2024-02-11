import { gql } from "@apollo/client";

export const PAY_PLAN = gql`
  mutation payPlan($id: ID!) {
    payPlan(id: $id) {
      id
      createdAt
      updatedAt
      type
      state
      token
      amount
      balance
      currency
      links {
        name
        description
        logo
        link
      }
      url
      image
      code
    }
  }
`;

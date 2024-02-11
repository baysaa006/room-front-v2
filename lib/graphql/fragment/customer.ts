import { gql } from "@apollo/client";

export const CUSTOMER_FIELDS = gql`
  fragment CustomerFields on Customer {
    id
    name
    phone
    email
    birthday
  }
`;

export const CUSTOMER_ACCOUNT_FIELDS = gql`
  fragment CustomerAccountFields on CustomerAccount {
    id
    customerId
    type
    data
    verified
    code
    accountId
  }
`;

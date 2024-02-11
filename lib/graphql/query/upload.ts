import { gql } from "@apollo/client";

export const GET_UPLOADS = gql`
  query getPredictions {
    getPredictions {
      createdAt
      completedAt
      before
      after
      theme
      room
      state
    }
  }
`;

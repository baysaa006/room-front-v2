import { gql } from "@apollo/client";

export const CREATE_PREDICTION = gql`
  mutation createPrediction($type: String!) {
    createPrediction(type: $type) {
      before
      id
    }
  }
`;

export const UPDATE_PREDICTION = gql`
  mutation updatePrediction($input: PredictionInput!) {
    updatePrediction(input: $input) {
      prediction {
        before
        after
        theme
        room
      }
      user {
        token
      }
    }
  }
`;

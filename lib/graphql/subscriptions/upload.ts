import { gql } from "@apollo/client";

export const ON_UPDATED_UPLOAD = gql`
  subscription onUpdatedUpload($iss: ID!) {
    onUpdatedUpload(iss: $iss) {
      iss
      upload {
        prediction
        before
        after
        theme
        room
      }
    }
  }
`;

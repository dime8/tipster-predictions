import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation UpdateMatchMutation($input: UpdateMatchByIdInput!) {
    updateMatchById(input: $input) {
      matchEdge {
        node {
          id
        }
      }
    }
  }
`;

export default (id, type, league, hostid, guestid, userid, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        matchPatch: {
          type,
          league,
          userid,
          hostid,
          guestid
        },
        id
      }
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, error) => {
        callback(response, error);
        return resolve(response);
      },
      onError: err => {
        console.error(err);
      }
    });
  });

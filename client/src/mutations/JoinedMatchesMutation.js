import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation JoinedMatchesMutation($input: CreateJoinedMatchInput!) {
    createJoinedMatch(input: $input) {
      joinedMatchEdge {
        node {
          id
        }
      }
    }
  }
`;

export default (matchid, userid, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        joinedMatch: {
          matchid,
          userid
        }
      }
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: response => {
        callback(response);
        return resolve(response);
      },
      onError: err => console.error(err)
    });
  });

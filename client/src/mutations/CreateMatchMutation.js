import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation CreateMatchMutation($input: CreateMatchInput!) {
    createMatch(input: $input) {
      matchEdge {
        node {
          id
          hostid
          guestid
          type
          league
          userid
        }
      }
    }
  }
`;

export default (type, league, hostid, guestid, userid, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        match: {
          type,
          league,
          hostid,
          guestid,
          userid
        }
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

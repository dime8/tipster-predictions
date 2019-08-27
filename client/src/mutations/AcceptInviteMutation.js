import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation AcceptInviteMutation($input: AcceptInviteInput!) {
    acceptInvite(input: $input) {
      uuid
    }
  }
`;

export default (inviteId, currentuserid, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        inviteId,
        currentuserid
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

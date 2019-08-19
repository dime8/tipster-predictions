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
        console.log("-->> Invite  --error:", error, "--res: ", response);
        return resolve(response);
      },
      onError: err => {
        console.log("-->> Invite error :", err);
        console.error(err);
      }
    });
  });

import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation InviteUserMutation($input: InviteUserInput!) {
    inviteUser(input: $input) {
      uuid
    }
  }
`;

export default (userId, matchId, callback) => {
  const variables = {
    input: {
      userId,
      matchId
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      callback(response);
      console.log("--Invite mutation complited. Var: ", variables);
    },
    onError: err => {
      callback(err);
      console.log("--Invite mutation error. Var: ", variables);
    }
  });
};

import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation RegisterMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      uuid
    }
  }
`;

export default (_username, _password, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        _username,
        _password
      }
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (res, err) => {
        callback(res, err);
        return resolve(res, err);
      },
      onError: err => {
        callback(err);
        alert("Registration error!", err);
      }
    });
  });

import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      jwtToken {
        username
        exp
        role
        userid
      }
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
        alert("Username or password is invalid!!!!!!!", err);
      }
    });
  });

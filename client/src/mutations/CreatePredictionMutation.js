import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation CreatePredictionMutation($input: CreatePredictionInput!) {
    createPrediction(input: $input) {
      predictionEdge {
        node {
          id
          matchid
          userid
          score
          userByUserid {
            id
            username
          }
        }
      }
    }
  }
`;

const updater = (store, variables) => {
  const matchid = variables.input.prediction.matchid;
  const newPrediction = store
    .getRootField("createPrediction")
    .getLinkedRecord("predictionEdge")
    .getLinkedRecord("node");

  const predictions = store
    .get(matchid)
    .getLinkedRecord(`predictionsByMatchid(orderBy:"USERID_ASC")`)
    .getLinkedRecords("nodes");

  const newPredictions = [...predictions, newPrediction];

  store
    .get(matchid)
    .getLinkedRecord(`predictionsByMatchid(orderBy:"USERID_ASC")`)
    .setLinkedRecords(newPredictions, "nodes");
};

export default (score, matchid, userid, callback) => {
  const variables = {
    input: {
      prediction: {
        matchid,
        userid,
        score
      }
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      callback(response);
      console.log("daaaaaaaaaaaa");
    },
    updater: store => {
      updater(store, variables);
    },
    onError: err => {
      console.error(err);
      console.log("neeeeeeeeeeee");
    }
  });
};

import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation DeletePredictionMutation($input: DeletePredictionByIdInput!) {
    deletePredictionById(input: $input) {
      predictionEdge {
        node {
          id
          matchByMatchid {
            id
            userByUserid {
              id
              username
            }
          }
        }
      }
    }
  }
`;

const getDeletedNode = store => {
  const predictionEdge = store
    .getRootField("deletePredictionById")
    .getLinkedRecord("predictionEdge");
  const predictionId = predictionEdge.getLinkedRecord("node").getValue("id");

  return predictionId;
};

const updater = (store, matchid) => {
  const predictions = store
    .get(matchid)
    .getLinkedRecord(`predictionsByMatchid(orderBy:"USERID_ASC")`)
    .getLinkedRecords("nodes");

  const deletedPredictionID = getDeletedNode(store);
  const newPredictions = predictions.filter(prediction => {
    const predictionID = prediction.getValue("id");

    return predictionID !== deletedPredictionID;
  });

  store
    .get(matchid)
    .getLinkedRecord(`predictionsByMatchid(orderBy:"USERID_ASC")`)
    .setLinkedRecords(newPredictions, "nodes");
};

export default (id, matchid, callback) => {
  const variables = {
    input: {
      id
    }
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: response => {
      callback();
    },
    updater: store => {
      updater(store, matchid);
    },
    onError: err => {
      console.error(err);
    }
  });
};

import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation DeleteMatchMutation($input: DeleteMatchByIdInput!) {
    deleteMatchById(input: $input) {
      matchEdge {
        node {
          id
        }
      }
    }
  }
`;

const getDeletedNode = store => {
  const matchEdge = store
    .getRootField("deleteMatchById")
    .getLinkedRecord("matchEdge");
  const matchId = matchEdge.getLinkedRecord("node").getValue("id");

  return matchId;
};

const updater = (store, userid) => {
  const joinedMatches = store
    .getRoot()
    .getLinkedRecord(`userById(id:"${userid}")`)
    .getLinkedRecord("joinedMatchesByUserid")
    .getLinkedRecords("nodes");
  const deletedMatchId = getDeletedNode(store);
  console.log("---id ", deletedMatchId, " matches ", joinedMatches);
  console.log("--- delete", store.getRoot());

  const newJoinedMatches = joinedMatches.filter(joinedMatch => {
    const joinedMatchID = joinedMatch.getValue("matchid");
    return joinedMatchID !== deletedMatchId;
  });
  store
    .getRoot()
    .getLinkedRecord(`userById(id:"${userid}")`)
    .getLinkedRecord("joinedMatchesByUserid")
    .setLinkedRecords(newJoinedMatches, "nodes");
};

export default (id, userid, callback) => {
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
      console.log("daaaaaaaaaaaa");
    },
    updater: store => {
      updater(store, userid);
    },
    onError: err => {
      console.error(err);
    }
  });
};

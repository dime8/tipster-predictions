import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../../Environment";
import Matches from "./Matches";

const MatchesPageQuery = graphql`
  query MatchesPageQuery($id: UUID!) {
    userById(id: $id) {
      joinedMatchesByUserid {
        nodes {
          matchid

          ...Matches_joinedMatches
          matchByMatchid {
            id
          }
        }
      }
    }
  }
`;

export default class MatchesPage extends React.Component {
  render() {
    console.log("--->>> Current UserMP: ", this.props.currentUser);
    return (
      <QueryRenderer
        environment={environment}
        query={MatchesPageQuery}
        variables={{ id: this.props.currentUser.userid }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          console.log("Meceeeviii", props.userById.joinedMatchesByUserid.nodes);
          return props.userById ? (
            <Matches
              joinedMatches={props.userById.joinedMatchesByUserid.nodes}
              currentUser={this.props.currentUser}
            />
          ) : null;
        }}
      />
    );
  }
}

import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import AuthHelperMethods from "../components/authentication/AuthHelperMethods";
import Matches from "../components/matches/Matches";

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
  constructor(props) {
    super(props);
    this.Auth = new AuthHelperMethods();
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={MatchesPageQuery}
        variables={{
          id: localStorage.getItem("currentUser")
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return props.userById ? (
            <Matches
              joinedMatches={props.userById.joinedMatchesByUserid.nodes}
              currentUser={localStorage.getItem("currentUser")}
              {...this.props}
            />
          ) : null;
        }}
      />
    );
  }
}

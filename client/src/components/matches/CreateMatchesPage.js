import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../../Environment";
import CreateMatch from "./CreateMatch";

const CreateMatchesPageQuery = graphql`
  query CreateMatchesPageQuery {
    allTeams(first: 5000) {
      nodes {
        ...CreateMatch_teams
      }
    }
  }
`;

export default class CreateMatchesPage extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CreateMatchesPageQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <CreateMatch teams={props.allTeams.nodes} />;
        }}
      />
    );
  }
}

import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import CreateMatch from "../components/matches/CreateMatch";

const CreateMatchesPageQuery = graphql`
  query CreateMatchesPageQuery {
    allTeams {
      nodes {
        ...CreateMatch_teams
      }
    }
  }
`;
const EditMatchPageQuery = graphql`
  query CreateMatchesPageEditQuery($id: UUID!) {
    allTeams {
      nodes {
        ...CreateMatch_teams
      }
    }
    matchById(id: $id) {
      id
      ...CreateMatch_editMatch
    }
  }
`;

export default class CreateMatchesPage extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <QueryRenderer
        environment={environment}
        query={
          this.props.location.pathname === "/create-match"
            ? CreateMatchesPageQuery
            : EditMatchPageQuery
        }
        variables={{ id: this.props.match.params.id }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <CreateMatch
              teams={props.allTeams.nodes}
              editMatch={props.matchById}
              {...this.props}
            />
          );
        }}
      />
    );
  }
}

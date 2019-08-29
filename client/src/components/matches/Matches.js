import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchCard from "./MatchCard";
import PredictionsDialog from "../predictions/PredictionsDialog";
import InviteUser from "../invites/InviteUser";
import AddPrediction from "../predictions/AddPrediction";
import DeleteMatch from "../matches/DeleteMatch";

import { createFragmentContainer, graphql } from "react-relay";

class Matches extends Component {
  state = {
    open: false,
    add: false,
    delete: false,
    invite: false,
    matchId: "",
    match: null
  };

  handleClickOpen = match => {
    this.setState({ open: true, match });
  };

  handleClickAdd = match => {
    this.setState({ add: true, match });
  };

  handleClickEdit = match => {
    this.props.history.replace({
      pathname: `/match/${match.id}`
    });
  };

  handleClickDelete = match => {
    this.setState({ delete: true, match });
  };
  handleClickInvite = match => {
    this.setState({ invite: true, match });
  };

  handleClose = () => {
    this.setState({
      delete: false,
      open: false,
      add: false,
      invite: false,
      matchId: "",
      match: null
    });
  };

  render() {
    const { joinedMatches } = this.props;

    const matches = joinedMatches.map(
      joinedMatch => joinedMatch.matchByMatchid
    );

    const { open, add } = this.state;
    const selectedMatch = this.state.match;
    return (
      <React.Fragment>
        <div className="flexContainer">
          {matches.length > 0 &&
            matches.map(match => (
              <MatchCard
                key={match.id}
                match={match}
                handleClickOpen={this.handleClickOpen}
                handleClickAdd={this.handleClickAdd}
                handleClickDelete={this.handleClickDelete}
                handleClickInvite={this.handleClickInvite}
                handleClickEdit={this.handleClickEdit}
                currentUser={this.props.currentUser}
              />
            ))}
        </div>
        {selectedMatch !== null && (
          <PredictionsDialog
            open={open}
            predictions={selectedMatch.predictionsByMatchid.nodes}
            updateMatch={this.updateMatch}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}

        {selectedMatch !== null && (
          <AddPrediction
            open={add}
            match={selectedMatch}
            predictions={selectedMatch.predictionsByMatchid.nodes}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}
        {selectedMatch !== null && (
          <DeleteMatch
            open={this.state.delete}
            match={selectedMatch}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}
        {selectedMatch !== null && (
          <InviteUser
            open={this.state.invite}
            match={selectedMatch}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}
      </React.Fragment>
    );
  }
}

Matches.propTypes = {
  joinedMatches: PropTypes.array.isRequired
};

export default createFragmentContainer(Matches, {
  joinedMatches: graphql`
    fragment Matches_joinedMatches on JoinedMatch @relay(plural: true) {
      matchByMatchid {
        id
        ...MatchCard_match
      }
    }
  `
});

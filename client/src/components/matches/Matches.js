import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchCard from "./MatchCard";
import PredictionsDialog from "../predictions/PredictionsDialog";
import InviteUser from "../invites/InviteUser";
import AddPrediction from "../predictions/AddPrediction";
import DeleteMatch from "../matches/DeleteMatch";

import { createFragmentContainer, graphql } from "react-relay";
import { logAndTrackError } from '../../utils/log'


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
    logAndTrackError(new Error('error'))
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

    const predictions =
      this.state.match !== null
        ? joinedMatches.find(joinedMatch => {
          return joinedMatch.matchByMatchid.id === this.state.match.id;
        }).matchByMatchid.predictionsByMatchid.nodes
        : null;

    const { open, add } = this.state;
    const selectedMatch = this.state.match;

    return (
      <React.Fragment>
        <div className="flexContainer">
          {matches.length > 0 ? (
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
            ))
          ) : (
              <span className="message">
                Add your matches, or join matches from other users.
            </span>
            )}
        </div>

        <PredictionsDialog
          open={open}
          match={selectedMatch}
          predictions={predictions}
          handleClose={this.handleClose}
          currentUser={this.props.currentUser}
        />

        <AddPrediction
          open={add}
          match={selectedMatch}
          predictions={predictions}
          handleClose={this.handleClose}
          currentUser={this.props.currentUser}
        />

        <DeleteMatch
          open={this.state.delete}
          match={selectedMatch}
          handleClose={this.handleClose}
          currentUser={this.props.currentUser}
        />

        <InviteUser
          open={this.state.invite}
          match={selectedMatch}
          handleClose={this.handleClose}
          currentUser={this.props.currentUser}
        />
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
        predictionsByMatchid(orderBy: USERID_ASC) {
          nodes {
            id
            score
            ...PredictionsDialog_predictions
            userByUserid {
              id
              username
            }
          }
        }
      }
    }
  `
});

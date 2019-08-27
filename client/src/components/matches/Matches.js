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
    red: false
  };

  handleClickOpen = id => () => {
    this.setState({ open: true, matchId: id });
  };

  handleClickAdd = id => () => {
    this.setState({ add: true, matchId: id });
  };

  handleClickDelete = id => () => {
    this.setState({ delete: true, matchId: id });
  };
  handleClickInvite = id => () => {
    this.setState({ invite: true, matchId: id });
  };

  handleClose = () => {
    this.setState({
      delete: false,
      open: false,
      add: false,
      invite: false,
      matchId: ""
    });
  };

  render() {
    const { joinedMatches } = this.props;

    const matches = joinedMatches.map(
      joinedMatch => joinedMatch.matchByMatchid
    );

    const { matchId, open, add } = this.state;
    const selectedMatch = matches.find(match => match.id === matchId);
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
                currentUser={this.props.currentUser}
              />
            ))}
        </div>
        {selectedMatch && (
          <PredictionsDialog
            open={open}
            predictions={selectedMatch.predictionsByMatchid.nodes}
            updateMatch={this.updateMatch}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}

        {selectedMatch && (
          <AddPrediction
            open={add}
            match={selectedMatch}
            predictions={selectedMatch.predictionsByMatchid.nodes}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}
        {selectedMatch && (
          <DeleteMatch
            open={this.state.delete}
            match={selectedMatch}
            handleClose={this.handleClose}
            currentUser={this.props.currentUser}
          />
        )}
        {selectedMatch && (
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
        type
        league
        teamByHostid {
          name
        }
        teamByGuestid {
          name
        }
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
        userByUserid {
          id
          username
        }
      }
    }
  `
});

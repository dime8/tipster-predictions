import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "@material-ui/core";
import "./Matches.css";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { createFragmentContainer, graphql } from "react-relay";
import Typography from "@material-ui/core/Typography";

class MatchCard extends Component {
  renderButton(buttonName, match, handleClick) {
    if (match.userByUserid.id === this.props.currentUser) {
      return (
        <Button
          className="matchCardButtons"
          size="small"
          onClick={() => {
            handleClick(match);
          }}
        >
          {buttonName}
        </Button>
      );
    }
  }

  render() {
    const {
      match,
      handleClickOpen,
      handleClickAdd,
      handleClickDelete,
      handleClickInvite,
      handleClickEdit
    } = this.props;
    let imageUrl = "";
    try {
      imageUrl = require(`../../static/images/cards/${match.type}.jpg`);
    } catch {
      imageUrl = require("../../static/images/cards/default.jpg");
    }
    return (
      <Card className="card">
        <CardActionArea>
          <CardContent className="matchBy">
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="User">{match.userByUserid.username}</span>
            </Typography>
          </CardContent>
          <CardMedia
            className="imageSport"
            component="img"
            alt={match.type}
            height="120"
            image={imageUrl}
            title={match.type}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {match.teamByHostid.name + " - " + match.teamByGuestid.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="matchContent">{match.type}</span>
              <br />
              <span className="matchContent">{match.league}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className="matchCardButtons"
            size="small"
            onClick={() => {
              handleClickOpen(match);
            }}
          >
            See predictions
          </Button>
          <Button
            className="matchCardButtons"
            size="small"
            onClick={() => {
              handleClickAdd(match);
            }}
          >
            Add prediction
          </Button>
          {this.renderButton("Edit", match, handleClickEdit)}
          {this.renderButton("Delete", match, handleClickDelete)}
          {this.renderButton("Invite", match, handleClickInvite)}
        </CardActions>
      </Card>
    );
  }
}
MatchCard.propTypes = {
  match: PropTypes.object.isRequired
};

export default createFragmentContainer(MatchCard, {
  match: graphql`
    fragment MatchCard_match on Match {
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
  `
});

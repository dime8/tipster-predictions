import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "@material-ui/core";
import "./Matches.css";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import { createFragmentContainer, graphql } from "react-relay";

class MatchCard extends Component {
  render() {
    const {
      match,
      handleClickOpen,
      handleClickAdd,
      handleClickDelete,
      handleClickInvite,
      currentUser
    } = this.props;
    let imageUrl = "";
    try {
      imageUrl = require(`../../static/images/cards/${match.type}.jpg`);
    } catch {
      imageUrl = require("../../static/images/cards/default.jpg");
    }
    console.log("match------", match.userByUserid.id);
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
            onClick={handleClickOpen(match.id)}
          >
            See predictions
          </Button>
          <Button
            className="matchCardButtons"
            size="small"
            onClick={handleClickAdd(match.id)}
          >
            Add prediction
          </Button>
          {match.userByUserid.id === currentUser.userid ? (
            <Button
              className="matchCardButtons"
              size="small"
              onClick={handleClickDelete(match.id)}
            >
              Delete match
            </Button>
          ) : (
            <Button className="matchCardButtons" size="small" disabled>
              Delete match
            </Button>
          )}
          {match.userByUserid.id === currentUser.userid ? (
            <Button
              className="matchCardButtons"
              size="small"
              onClick={handleClickInvite(match.id)}
            >
              Invite
            </Button>
          ) : (
            <Button className="matchCardButtons" size="small" disabled>
              Invite
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}
MatchCard.propTypes = {
  match: PropTypes.object.isRequired
};

export default MatchCard;

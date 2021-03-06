import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "@material-ui/core";
import "./Predictions.css";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import DeletePredictionMutation from "../../mutations/DeletePredictionMutation";

import { createFragmentContainer, graphql } from "react-relay";

class PredictionCard extends Component {
  deletePrediction = () => {
    const { id, matchid } = this.props.prediction;

    DeletePredictionMutation(
      id,
      matchid,

      res => {
        console.log("Mutation completed!");
        alert(`Prediction ${id} delited!`);
      }
    );
  };
  renderButton(buttonName, prediction, handleClick) {
    if (prediction.userByUserid.id === this.props.currentUser) {
      return (
        <Button
          size="small"
          color="primary"
          onClick={() => {
            handleClick();
          }}
        >
          {buttonName}
        </Button>
      );
    }
  }

  render() {
    const { prediction } = this.props;

    return (
      <Card className="card">
        <CardActionArea>
          <CardContent className="matchBy">
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="User">{prediction.userByUserid.username}</span>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {prediction.score}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {this.renderButton("Delete", prediction, this.deletePrediction)}
        </CardActions>
      </Card>
    );
  }
}
PredictionCard.propTypes = {
  prediction: PropTypes.object.isRequired
};
export default createFragmentContainer(PredictionCard, {
  prediction: graphql`
    fragment PredictionCard_prediction on Prediction {
      id
      matchid
      score
      userByUserid {
        id
        username
      }
    }
  `
});

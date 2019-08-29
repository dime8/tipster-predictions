import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Predictions.css";

import { createFragmentContainer, graphql } from "react-relay";
import PredictionCard from "./PredictionCard";

class PredictionsDialog extends React.Component {
  constructor(props) {
    super();
    this.state = { predictions: props.predictions };
  }
  isMatchDataExist() {
    return this.props.match !== null;
  }

  render() {
    const { handleClose, predictions } = this.props;
    console.log("PROOO", this.props);

    return (
      this.isMatchDataExist() && (
        <div>
          <Dialog
            open={this.props.open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">Predictions</DialogTitle>
            <DialogContent className="Content">
              {Object.keys(predictions).length !== 0 ? (
                predictions.map(prediction => (
                  <PredictionCard
                    key={prediction.id}
                    prediction={prediction}
                    currentUser={this.props.currentUser}
                  />
                ))
              ) : (
                <span className="predictionUser">
                  There are no predictions for this match!
                </span>
              )}
            </DialogContent>
            <DialogActions className="Actions">
              <Button onClick={() => handleClose()} /* color="primary"*/>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    );
  }
}

export default createFragmentContainer(PredictionsDialog, {
  predictions: graphql`
    fragment PredictionsDialog_predictions on Prediction @relay(plural: true) {
      id
      ...PredictionCard_prediction
    }
  `
});

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Predictions.css";

class AddDialog extends React.Component {
  render() {
    const { open, handleClose, match } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Add Prediction</DialogTitle>
          <DialogContent className="Content">
            <DialogContentText className="predictionMatch">
              <span className="predictionMatch">
                {match.teamByHostid.name} - {match.teamByGuestid.name}
              </span>
            </DialogContentText>
            <TextField
              autoFocus
              value={this.props.score}
              onChange={e => this.props.updateField(e.target.value, "score")}
              margin="dense"
              id="score"
              label="Enter prediction"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions className="Actions">
            <Button onClick={this.props._addPrediction} /* color="primary"*/>
              Add
            </Button>
            <Button onClick={handleClose} /* color="primary"*/>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddDialog;

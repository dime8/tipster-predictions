import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Matches.css";

class DeleteDialog extends React.Component {
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
          <DialogTitle id="scroll-dialog-title">Delete Prediction</DialogTitle>
          <DialogContent className="Content">
            <DialogContentText className="predictionMatch">
              <span className="predictionMatch">
                Do you want to delete match: {match.teamByHostid.name} -{" "}
                {match.teamByGuestid.name}
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="Actions">
            <Button onClick={this.props._deleteMatch} /* color="primary"*/>
              Yes
            </Button>
            <Button onClick={handleClose} /* color="primary"*/>No</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteDialog;

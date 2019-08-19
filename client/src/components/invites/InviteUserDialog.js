import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AllUserList from "./AllUserList";

import "./Invites.css";

import { createFragmentContainer, graphql } from "react-relay";

class InviteUserDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userid: localStorage.getItem("currentUserId") || ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { handleClose, _inviteUser } = this.props;
    // console.log(">>>>>>> prediction dialog: mathes", predictions);

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Predictions</DialogTitle>
          <DialogContent className="Content">
            <AllUserList handleChange={this.handleChange} id={this.state.id} />
          </DialogContent>
          <DialogActions className="Actions">
            {this.state.id === "" ? (
              <Button disabled>Invite</Button>
            ) : (
              <Button onClick={() => _inviteUser(this.state.id)}>Invite</Button>
            )}
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default InviteUserDialog;

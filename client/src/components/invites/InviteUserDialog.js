import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AllUserList from "../../routes/AllUserList";

import "./Invites.css";

class InviteUserDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userid: props.currentUser || ""
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
            <Button onClick={() => handleClose()}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default InviteUserDialog;

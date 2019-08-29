import React, { Component } from "react";

import InviteUserMutation from "../../mutations/InviteUserMutation";
import InviteUserDialog from "./InviteUserDialog";

class InviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: "",
      userid: localStorage.getItem("currentUser")
    };
  }
  isMatchDataExist() {
    return this.props.match !== null;
  }

  render() {
    return (
      this.isMatchDataExist() && (
        <div>
          <InviteUserDialog
            open={this.props.open}
            match={this.props.match}
            _inviteUser={this._inviteUser}
            handleClose={this.props.handleClose}
            currentUser={this.props.currentUser}
          />
        </div>
      )
    );
  }

  _inviteUser = userid => {
    const matchid = this.props.match.id;
    InviteUserMutation(userid, matchid, res => {
      console.log("Mutation completed! Response:", res);
      alert(`Invited user id :${userid}. Match id: ${matchid}.
      Accept invite using this code(invite id): ${res.inviteUser.uuid}`);
      console.log(
        `Accept invite using this code(invite id): %c${res.inviteUser.uuid}`,
        "color: green"
      );
      this.props.handleClose();
    });
  };
}

export default InviteUser;

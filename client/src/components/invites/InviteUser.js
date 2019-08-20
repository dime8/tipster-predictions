import React, { Component } from "react";

import InviteUserMutation from "../../mutations/InviteUserMutation";
import InviteUserDialog from "./InviteUserDialog";

class InviteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "",
      match: "",
      userid: ""
    };
  }
  componentDidMount() {
    this.setState({
      match: this.props.match
    });
  }
  render() {
    console.log("--->>> Inv-for-match: ", this.props.match);
    return (
      <div>
        <InviteUserDialog
          open={this.props.open}
          match={this.props.match}
          _inviteUser={this._inviteUser}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }

  _inviteUser = userid => {
    console.log("--->>> Pozivanje mutacije, invite!");

    const matchid = this.state.match.id;
    InviteUserMutation(userid, matchid, res => {
      console.log("Mutation completed!", res);
      alert(`Invited user id :${userid}. Match id: ${matchid}.
      Accept invite using this code(invite id): ${res.inviteUser.uuid}`);
      console.log(
        `Accept invite using this code(invite id): ${res.inviteUser.uuid}`
      );
      this.props.handleClose();
    });
  };
}

export default InviteUser;

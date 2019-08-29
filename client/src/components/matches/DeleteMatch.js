import React, { Component } from "react";

import DeleteMatchMutation from "../../mutations/DeleteMatchMutation";
import DeleteDialog from "./DeleteDialog";

class DeleteMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "",
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
          <DeleteDialog
            open={this.props.open}
            match={this.props.match}
            _deleteMatch={this._deleteMatch}
            handleClose={this.props.handleClose}
          />
        </div>
      )
    );
  }

  _deleteMatch = () => {
    this.props.handleClose();
    const userid = this.state.userid;
    const matchid = this.props.match.id;
    DeleteMatchMutation(matchid, userid, res => {
      console.log("Mutation completed!");
      alert(`Match ${matchid} delited!`);
    });
  };
}

export default DeleteMatch;

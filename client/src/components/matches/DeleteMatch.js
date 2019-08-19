import React, { Component } from "react";

import DeleteMatchMutation from "../../mutations/DeleteMatchMutation";
import DeleteDialog from "./DeleteDialog";

class DeleteMatch extends Component {
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
      match: this.props.match,
      userid: this.props.match.userByUserid.id
    });
  }
  render() {
    return (
      <div>
        <DeleteDialog
          open={this.props.open}
          match={this.props.match}
          _deleteMatch={this._deleteMatch}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }

  _deleteMatch = () => {
    const { userid } = this.state;
    const matchid = this.state.match.id;
    DeleteMatchMutation(matchid, userid, res => {
      console.log("Mutation completed!");
      alert(`Match ${matchid} delited!`);
      this.props.handleClose();
    });
  };
}

export default DeleteMatch;

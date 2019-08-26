import React, { Component } from "react";

import CreatePredictionMutation from "../../mutations/CreatePredictionMutation";
import AddDialog from "./AddDialog";
import AuthHelperMethods from "../login/AuthHelperMethods";

class AddPrediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "",
      match: "",
      userid: ""
    };
  }

  Auth = new AuthHelperMethods();

  componentDidMount() {
    const user = this.Auth.getConfirm();
    this.setState({
      match: this.props.match,
      userid: user.userid
    });
  }
  render() {
    return (
      <div>
        <AddDialog
          name={this.state.name}
          open={this.props.open}
          match={this.props.match}
          updateField={this.updateField}
          _addPrediction={this._addPrediction}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }

  updateField = (inputValue, fieldName) => {
    this.setState({ [fieldName]: inputValue });
  };

  _addPrediction = () => {
    const { score, userid } = this.state;
    const matchid = this.state.match.id;
    console.log(matchid, score);
    CreatePredictionMutation(score, matchid, userid, res => {
      console.log("Mutation completed!");
      alert(`Prediction added! 
      ${matchid} - ${score}`);
      this.props.handleClose();
    });
  };
}

export default AddPrediction;

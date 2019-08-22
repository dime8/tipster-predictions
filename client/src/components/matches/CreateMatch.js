import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createFragmentContainer, graphql } from "react-relay";

import { withRouter, browserHistory } from "react-router";

import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import CreateMatchMutation from "../../mutations/CreateMatchMutation";
import JoinedMatchesMutation from "../../mutations/JoinedMatchesMutation";

class CreateMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      league: "",
      hostid: "",
      guestid: "",
      userid: localStorage.getItem("id_token"),
      teams: props.teams,
      redirect: false
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

  handleSubmit = event => {
    event.preventDefault();
    CreateMatchMutation(
      this.state.type,
      this.state.league,
      this.state.hostid,
      this.state.guestid,
      this.state.userid,
      (res, err) => {
        console.log(
          "--->>> Errors: ",
          err,
          " --res ",
          res.createMatch.matchEdge.node.id
        );
        if (!err) {
          console.log("Match created!");
          alert(`Match added!`);

          JoinedMatchesMutation(
            res.createMatch.matchEdge.node.id,
            res.createMatch.matchEdge.node.userid,
            res => {
              console.log("...Match: ", res);
            }
          );

          this.setState({
            type: "",
            league: "",
            hostid: "",
            guestid: "",
            userid: localStorage.getItem("id_token")
          });
        }
      }
    ).then(() => this.setState({ redirect: true }));
  };

  render() {
    const { teams, redirect } = this.state;
    const hosts = teams.filter(team => team.id !== this.state.guestid);
    const guests = teams.filter(team => team.id !== this.state.hostid);

    return (
      <form onSubmit={this.handleSubmit}>
        {redirect && <Redirect to="/" />}
        <div className="container">
          <TextField
            name="type"
            id="type"
            label="Type"
            className={"textField"}
            value={this.state.type}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="league"
            name="league"
            label="League"
            className={"textField"}
            value={this.state.league}
            onChange={this.handleChange}
            margin="normal"
          />
          <div className={"formSelect"}>
            <FormControl className={"formControl"}>
              <InputLabel htmlFor="age-native-simple">Host</InputLabel>
              <Select
                native
                value={this.state.hostid}
                onChange={this.handleChange}
                name="hostid"
                inputProps={{
                  name: "hostid",
                  id: "age-native-simple"
                }}
              >
                <option value="" />

                {hosts.map(host => (
                  <option key={host.id} value={host.id}>
                    {host.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <span> </span>
            <FormControl className={"formControl"}>
              <InputLabel htmlFor="age-native-simple">Guest</InputLabel>
              <Select
                native
                value={this.state.guestid}
                onChange={this.handleChange}
                name="guestid"
                inputProps={{
                  name: "guestid",
                  id: "age-native-simple"
                }}
              >
                <option value="" />
                {guests.map(guest => (
                  <option key={guest.id} value={guest.id}>
                    {guest.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default withRouter(
  createFragmentContainer(CreateMatch, {
    teams: graphql`
      fragment CreateMatch_teams on Team @relay(plural: true) {
        id
        name
        league
        type
      }
    `
  })
);

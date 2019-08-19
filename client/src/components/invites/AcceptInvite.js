import React, { Component } from "react";
import AcceptInviteMutation from "../../mutations/AcceptInviteMutation";
import JoinedMatchesMutation from "../../mutations/JoinedMatchesMutation";
import { Redirect } from "react-router-dom";

export default class AcceptInvite extends Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    this._acceptInvite();
  }

  _acceptInvite = () => {
    console.log("-->> fsk :", this.props);
    AcceptInviteMutation(
      this.props.match.params.id,
      this.props.currentUserId,
      (res, err) => {
        if (res.acceptInvite) {
          console.log("Invite accepted!");

          JoinedMatchesMutation(
            res.acceptInvite.uuid,
            this.props.currentUserId,
            () => console.log("User joined to room!")
          ).then(this.setState({ redirect: true }));
        } else {
          alert(err[0].message);
        }
      }
    );
  };
  render() {
    return this.state.redirect && <Redirect to="/" />;
  }
}

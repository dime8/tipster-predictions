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
      this.props.currentUser,
      (res, err) => {
        if (res.acceptInvite) {
          console.log("Invite accepted!", res);

          JoinedMatchesMutation(
            res.acceptInvite.uuid,
            this.props.currentUser,
            () => console.log("User joined to room!")
          ).then(this.setState({ redirect: true }));
        } else {
          alert(err[0].message);
          this.setState({ redirect: true });
        }
      }
    );
  };
  render() {
    return this.state.redirect && <Redirect to="/" />;
  }
}

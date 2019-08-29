import { Component } from "react";
import AcceptInviteMutation from "../../mutations/AcceptInviteMutation";

export default class AcceptInvite extends Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    this.acceptInvite();
  }

  acceptInvite = () => {
    AcceptInviteMutation(
      this.props.match.params.id,
      localStorage.getItem("currentUser"),
      (res, err) => {
        if (res.acceptInvite) {
          console.log("Invite accepted!", res);
          alert("Invite accepted!");
          this.props.history.replace({
            pathname: "/"
          });
        } else {
          alert(err[0].message);
          this.props.history.replace({
            pathname: "/"
          });
        }
      }
    );
  };
  render() {
    return null;
  }
}

import React, { Component } from "react";
// import './AllUsersList.css';
import environment from "../../Environment";
import { graphql, QueryRenderer } from "react-relay";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class AllUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: localStorage.getItem("currentUserId") || ""
    };
  }
  render() {
    const { id } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AllUserListQuery {
            allUsers {
              edges {
                node {
                  id
                  username
                  password
                }
              }
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }

          console.log(this.state);
          return (
            <div>
              <div className={"this.props.classes.root"}>
                <FormControl className={"formControl"}>
                  <InputLabel htmlFor="age-native-simple">Name</InputLabel>
                  <Select
                    native
                    value={id}
                    onChange={this.props.handleChange}
                    name="id"
                    inputProps={{
                      name: "id",
                      id: "age-native-simple"
                    }}
                  >
                    <option value="" />
                    {props.allUsers.edges
                      .filter(node => {
                        return node.node.id !== this.state.userid;
                      })
                      .map(node => (
                        <option key={node.node.id} value={node.node.id}>
                          {node.node.username}
                        </option>
                      ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

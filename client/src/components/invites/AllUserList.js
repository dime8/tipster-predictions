import React, { Component } from "react";
import environment from "../../Environment";
import { graphql, QueryRenderer } from "react-relay";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class AllUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: localStorage.getItem("id_token") || ""
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

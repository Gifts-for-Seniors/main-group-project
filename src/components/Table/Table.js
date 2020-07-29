import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input } from "@material-ui/core";
import "./Table.css";

class BarrelTable extends Component {
  state = {
    itemToEdit: 0,
    hosts: "",
    street: " ",
    city: "",
    description: "",
    zipcode: " ",
    status: true,
  };

  editItem = (item) => {
    this.setState({
      ...this.state,
      itemToEdit: item.id,
      hosts: item.hosts,
      street: item.street,
      city: item.city,
      description: item.description,
      zipcode: item.zipcode,
      status: item.status,
    });
    console.log(this.state);
  };

  updatePriority = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      priority: item.priority,
    };
    this.props.dispatch({
      type: "UPDATE_PRIORITY",
      payload: data,
    });
  };

  render() {
    return (
      <div id="wrapper">
        <table className="barrelTable">
          <thead>
            <tr>
              <th>Host</th>
              <th>Street Number</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.searchBarrels.map((item) => {
              return (
                <tr className="insertItem">
                  <td>{item.hosts}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.zipcode}</td>
                  <td>{item.description}</td>
                  <td>{item.status ? "Active" : "Deactivated"}</td>
                  <td>
                    <StyledButton
                      onClick={() => {
                        this.editItem(item);
                      }}
                    >
                      Edit
                    </StyledButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelTable);

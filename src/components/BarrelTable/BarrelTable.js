import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input } from "@material-ui/core";
import "./BarrelTable.css";

class BarrelTable extends Component {
  state = {
    itemToEdit: 0,
    hosts: "",
    street: " ",
    city: "",
    description: "",
    zipcode: " ",
    status: true,
    date: "",
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
      date: item.date,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
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

  trackEdit = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  deleteItem = (id) => {
    let dataObject = {
      id: id,
      previousSearch: this.props.state.searchBarrels,
    };

    console.log(dataObject);
    this.props.dispatch({
      type: "DELETE_BARREL",
      payload: dataObject,
    });
    // console.log("payload", id);
  };
  render() {
    return (
      <div id="wrapper">
        <table className="barrelTable">
          <thead>
            <tr className="coolTableTr">
              <th>Host</th>
              <th>Street Number</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Display data based on whether editing or not */}
            {this.props.state.searchBarrels.map((item) => {
              if (item.id === this.state.itemToEdit) {
                return (
                  <tr>
                    <td>{item.hosts}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.zipcode}</td>
                    <td>
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.date}
                        value={this.state.date}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "date")}
                      ></Input>
                    </td>
                    <td>
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.description}
                        value={this.state.description}
                        variant="filled"
                        onChange={(event) =>
                          this.trackEdit(event, "description")
                        }
                      ></Input>
                    </td>
                    <td className="checkBox">
                      <StyledCheckbox
                        onChange={() => {
                          this.updatePriority(item);
                        }}
                        type="checkbox"
                        checked={item.priority}
                      />
                    </td>
                    <td>
                      <i class="archive icon"></i>
                    </td>
                    <td>
                      <i class="ban icon"></i>
                    </td>
                    <td>
                      <i
                        class="trash icon"
                        onClick={() => this.deleteItem(item.id)}
                      ></i>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr className="barrelItem">
                    <td>{item.hosts}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.zipcode}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.status ? "Active" : "Deactivated"}</td>
                    <td>
                      <i
                        class="edit icon"
                        onClick={() => {
                          this.editItem(item);
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              }
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

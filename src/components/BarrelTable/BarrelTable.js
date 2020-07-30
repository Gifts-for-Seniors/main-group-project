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
    street: "",
    city: "",
    description: "",
    zipcode: "",
    hours: "",
    status: true,
    date: "",
    barrelStatus: false,
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
      date: item.dates,
      hours: item.hours,
      searchTerm: this.props.state.searchTerm,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  updateStatus = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      status: item.status,
      previousSearch: this.props.state.searchTerm
    };
    this.props.dispatch({
      type: "UPDATE_STATUS",
      payload: data
    });
  };

  trackEdit = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  deleteItem = (id) => {
    let dataObject = {
      id: id,
      previousSearch: this.props.state.searchTerm,
    };

    console.log(dataObject);
    this.props.dispatch({
      type: "DELETE_BARREL",
      payload: dataObject,
    });
    // console.log("payload", id);
  };

  saveChanges = () => {
    this.props.dispatch({
      type: "UPDATE_BARREL",
      payload: this.state,
    });
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
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
              <th>Dates</th>
              <th>Hours</th>
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
                    <td>
                      {" "}
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.hosts}
                        value={this.state.hosts}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "hosts")}
                      ></Input>
                    </td>
                    <td>
                      {" "}
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.street}
                        value={this.state.street}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "street")}
                      ></Input>
                    </td>
                    <td>
                      {" "}
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.city}
                        value={this.state.city}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "city")}
                      ></Input>
                    </td>
                    <td>
                      {" "}
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.zipcode}
                        value={this.state.zipcode}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "zipcode")}
                      ></Input>
                    </td>
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
                        label={this.state.hours}
                        value={this.state.hours}
                        variant="filled"
                        onChange={(event) => this.trackEdit(event, "hours")}
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
                          this.updateStatus(item);
                        }}
                        type="checkbox"
                        checked={item.status}
                      />
                    </td>
                    <td>
                      <i
                        class="archive icon"
                        value={item.id}
                        onClick={() => this.saveChanges()}
                      ></i>
                    </td>
                    <td>
                      <i class="ban icon" onClick={this.cancelEdit}></i>
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
                    <td>{item.dates}</td>
                    <td>{item.hours}</td>
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

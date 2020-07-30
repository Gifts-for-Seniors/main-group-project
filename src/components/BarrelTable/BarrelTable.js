import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input, TextField } from "@material-ui/core";
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
      previousSearch: this.props.state.searchTerm,
    };
    this.props.dispatch({
      type: "UPDATE_STATUS",
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
          <thead className="tableHeader">
            <tr className="coolTableTr">
              <th className="hostTag">Host</th>
              <th>Street Number</th>
              <th className="cityTag">City</th>
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
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        multiline
                        rowsMax={10}
                        value={this.state.hosts}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "hosts")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        multiline
                        rowsMax={10}
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        value={this.state.street}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "street")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.city}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "city")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.zipcode}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "zipcode")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.date}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "date")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.hours}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "hours")}
                      ></TextField>
                    </td>
                    <td>
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.description}
                        variant="outlined"
                        onChange={(event) =>
                          this.trackEdit(event, "description")
                        }
                      ></TextField>
                    </td>
                    <td>
                      <div
                        className="sliderCheckbox"
                        class="ui slider checkbox"
                      >
                        <input
                          type="checkbox"
                          onChange={() => {
                            this.updateStatus(item);
                          }}
                          checked={item.status}
                          name="newsletter"
                        />
                        <label className="sliderLabel">
                          {item.status ? "Active" : "Not Active"}
                        </label>
                      </div>
                    </td>
                    <td>
                      <i
                        class="archive icon"
                        value={item.id}
                        onClick={() => this.saveChanges()}
                      >
                        <p>Save</p>
                      </i>
                    </td>
                    <td>
                      <i class="ban icon" onClick={this.cancelEdit}>
                        <p>Cancel</p>
                      </i>
                    </td>
                    <td>
                      <i
                        class="trash icon"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <p>Delete</p>
                      </i>
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

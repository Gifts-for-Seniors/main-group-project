import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input, TextField } from "@material-ui/core";
import "./BarrelTable.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import TableData from "./TableData.js";
import BarrelHead from "./TableHead.js";
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
    toggleEvent: false,
    public: true,
    openModal: false,
  };

  editItem = (item) => {
    this.setState({
      ...this.state,
      itemToEdit: item.id,
      hosts: item.hosts,
      street: item.street,
      public: item.public,
      city: item.city,
      description: item.description,
      zipcode: item.zipcode,
      status: item.status,
      date: item.dates,
      hours: item.hours,
      searchTerm: this.props.state.searchTerm,
    });
    console.log("ITEM IS", item.public);
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

  updatePublic = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      public: item.public,
      previousSearch: this.props.state.searchTerm,
    };
    this.props.dispatch({
      type: "UPDATE_PUBLIC",
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
    console.log(this.state);
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  submitAlert = (item) => {
    console.log(item);
    confirmAlert({
      title: "Delete Barrel Location",
      message: "This action is permanent, are you sure?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteItem(item),
        },
        {
          label: "Cancel",
          onClick: () => this.cancelEdit(),
        },
      ],
    });
  };

  render() {
    return (
      <div className="table-container">
        <table class="ui celled table">
          {/* TABLE HEADERS */}
          <BarrelHead />
          <tbody>
            {/* IF EDITING, DISPLAY THIS */}
            {this.props.state.searchBarrels.map((item) => {
              if (item.id === this.state.itemToEdit) {
                return (
                  <tr>
                    <td>
                      {/* INPUT FIELDS */}
                      {/* HOSTS */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        placeholder="Host Name"
                        type="text"
                        multiline
                        rowsMax={10}
                        value={this.state.hosts}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "hosts")}
                      ></TextField>
                    </td>
                    <td>
                      {/* STREET */}
                      <TextField
                        multiline
                        rowsMax={10}
                        autoFocus="true"
                        className="editInput"
                        placeholder="Street Address"
                        type="text"
                        value={this.state.street}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "street")}
                      ></TextField>
                    </td>
                    <td>
                      {/* CITY */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        placeholder="City"
                        value={this.state.city}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "city")}
                      ></TextField>
                    </td>
                    <td>
                      {/* ZIPCODE */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        placeholder="Zipcode"
                        value={this.state.zipcode}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "zipcode")}
                      ></TextField>
                    </td>
                    <td>
                      {/* DATES */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        value={this.state.date}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "date")}
                        placeholder="Dates Available"
                      ></TextField>
                    </td>
                    <td>
                      {/* HOURS */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        placeholder="Hours Open"
                        value={this.state.hours}
                        variant="outlined"
                        onChange={(event) => this.trackEdit(event, "hours")}
                      ></TextField>
                    </td>
                    <td>
                      {/* DESCRIPTION */}
                      <TextField
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        rowsMax={10}
                        multiline
                        placeholder="Description"
                        value={this.state.description}
                        variant="outlined"
                        onChange={(event) =>
                          this.trackEdit(event, "description")
                        }
                      ></TextField>
                    </td>
                    {/* ENDS INPUT FIELDS */}
                    <td>
                      {/* TOGGLES */}
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
                        />{" "}
                        <label className="sliderLabel">
                          {item.status ? "Active" : "Not Active"}
                        </label>
                      </div>
                    </td>
                    <td>
                      <div
                        className="sliderCheckbox"
                        class="ui slider checkbox"
                      >
                        <input
                          type="checkbox"
                          onChange={() => {
                            console.log(item.public);
                            this.updatePublic(item);
                          }}
                          checked={item.public}
                          name="newsletter"
                        />{" "}
                        <label className="sliderLabel">
                          {item.public ? "Public" : "Private"}
                        </label>
                      </div>
                    </td>
                    {/* ENDS TOGGLES */}
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
                        onClick={() => this.submitAlert(item.id)}
                      >
                        <p>Delete</p>
                      </i>
                    </td>
                  </tr>
                );
              } else {
                // RETURN A TABLE WITH DATA
                return <TableData editItem={this.editItem} item={item} />;
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

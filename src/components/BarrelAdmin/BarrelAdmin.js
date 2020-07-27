import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import BarrelSearch from "./BarrelSearch";
class BarrelAdmin extends Component {
  state = {
    host: "",
    street: "",
    city: "",
    zipcode: "",
    description: "",
    hours: "",
  };
  addBarrel = (event) => {
    const barrelData = Object.values(this.state);
    for (let i = 0; i < barrelData.length; i++) {
      console.log(barrelData[i]);
      if (barrelData[i] === "") {
        console.log("bump");

        return alert("All form fields must be filled out.");
      }
    }
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TO_LIST", payload: this.state });
    // alert('added!')
    this.setState({
      host: "",
      street: "",
      city: "",
      zipcode: "",
      description: "",
      hours: "",
    });
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="barrelForm">
        <BarrelSearch />
        <h3 id="addDonationH3" className="tableTitle">
          Add a Donation Location
        </h3>

        <form>
          <div className="addBarrels">
            <div className="addBarrelInput">
              <TextField
                label="Host Name"
                variant="outlined"
                name="host"
                type="text"
                value={this.state.host}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                variant="outlined"
                label="Street"
                name="street"
                type="text"
                value={this.state.street}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="City"
                variant="outlined"
                name="city"
                type="text"
                value={this.state.city}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Zipcode"
                name="zipcode"
                type="text"
                variant="outlined"
                value={this.state.zipcode}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Description"
                name="description"
                type="text"
                variant="outlined"
                value={this.state.description}
                onChange={this.handleInput}
              />
            </div>
            <div className="addBarrelInput">
              <TextField
                label="Hours"
                name="hours"
                type="text"
                variant="outlined"
                value={this.state.hours}
                onChange={this.handleInput}
              />
            </div>

            <StyledButton
              id="theSubmitButtonForCarolyn"
              className="addBarrelButton"
              onClick={this.addBarrel}
            >
              Submit
            </StyledButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);

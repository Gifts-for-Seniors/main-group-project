import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import { StyledButton } from "../ButtonStyles/Buttons";

class BarrelAdmin extends Component {
  state = {
    host: "",
    street: "",
    city: "",
    zipcode: "",
    directions: "",
    hours: "",
    status: "",
  };
  addBarrel = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TO_LIST", payload: this.state });
    // alert('added!')
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="addBarrels">
        <div className="addBarrelInput">
          <label for="name"> Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="Street">Street:</label>

          <input
            name="street"
            type="text"
            value={this.state.street}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="City">City:</label>
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="Zipcode">Zipcode:</label>
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="Directions">Directions:</label>
          <input
            name="directions"
            type="text"
            value={this.state.directions}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="hours">Hours:</label>
          <input
            name="hours"
            type="text"
            value={this.state.hours}
            onChange={this.handleInput}
          />
        </div>
        <div className="addBarrelInput">
          <label for="status">Status:</label>
          <input
            name="status"
            type="text"
            value={this.state.status}
            onChange={this.handleInput}
          />
        </div>
        <StyledButton
          className="addBarrelButton"
          onClick={() => this.addBarrel}
        >
          Submit
        </StyledButton>
        {/* <button
          onClick={() => {
            this.addBarrel;
          }}
        >
          Add Location
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);

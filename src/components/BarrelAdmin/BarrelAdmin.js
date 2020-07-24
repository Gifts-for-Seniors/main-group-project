import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
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
      <div className="barrelForm">
        <h3 id="addDonationH3" className="tableTitle">
          Add a Donation Location
        </h3>

        <form>
          <div className="addBarrels">
            <div className="addBarrelInput">
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                type="text"
                value={this.state.name}
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
                label="Directions"
                name="directions"
                type="text"
                variant="outlined"
                value={this.state.directions}
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
            {/* <div className="addBarrelInput">
              <TextField
                name="status"
                type="text"
                label="Status"
                variant="outlined"
                value={this.state.status}
                onChange={this.handleInput}
              />
            </div> */}
            <StyledButton
              id="theSubmitButtonForCarolyn"
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);

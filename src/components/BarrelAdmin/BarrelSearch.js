import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";

class searchBarrels extends Component {
  state = {
    search: "",
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  search = () => {
    console.log("click");
  };
  render() {
    return (
      <div>
        <h3 id="addDonationH3" className="tableTitle">
          Search Current Donation Locations
        </h3>
        <form>
          <div className="searchBarrels">
            <div className="addBarrelInput">
              <span>
                <TextField
                  id="searchField"
                  label="Search"
                  name="search"
                  type="text"
                  variant="outlined"
                  value={this.state.search}
                  onChange={this.handleInput}
                />
                <StyledButton onClick={this.search} id="searchButton">
                  Search
                </StyledButton>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default searchBarrels;

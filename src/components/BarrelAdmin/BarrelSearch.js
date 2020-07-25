import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";

class searchBarrels extends Component {
  state = {
    search: "",
    toggler: false,
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.search);
  };

  search = () => {
    console.log("click");
    this.setState({
      toggler: !this.state.toggler,
    });
    console.log(this.state.toggler);
  };
  render() {
    return (
      <div>
        {this.state.toggler ? (
          <div>
            <h3 id="addDonationH3" className="tableTitle">
              Search Current Donation Sites
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
        ) : (
          <div>
            <h3 onClick={this.search} id="searchDisplay" className="tableTitle">
              Display Search Bar
            </h3>
          </div>
        )}
      </div>
    );
  }
}
export default searchBarrels;

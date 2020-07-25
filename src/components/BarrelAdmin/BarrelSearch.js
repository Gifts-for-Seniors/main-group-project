import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

class searchBarrels extends Component {
  state = {
    search: "",
    toggler: false,
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  toggle = () => {
    this.setState({
      toggler: !this.state.toggler,
    });
  };

  search = () => {
    console.log("click");
    console.log(this.state);
    this.props.dispatch({
      type: "SEARCH_ALL_BARRELS",
      payload: this.state.search,
    });
  };
  render() {
    return (
      <div>
        {this.state.toggler ? (
          <div>
            <h3 onClick={this.toggle} id="searchDisplay" className="tableTitle">
              Hide Search Bar
            </h3>
            <h3 id="addDonationH3" className="tableTitle">
              Search Current Donation Sites
            </h3>
            <p className="searchLabel">Search "*all" for All locations</p>

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
            <h3 onClick={this.toggle} id="searchDisplay" className="tableTitle">
              Display Search Bar
            </h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(searchBarrels);

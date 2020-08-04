import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import "./BarrelSearch.css";
import searchTerm from "../../redux/reducers/searchTermReducer";



class BarrelSearch extends Component {
  state = {
    search: "",
    toggler: false,
    // showDetails: false,
    // opacity: 0
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
    let search = this.state.search;
    console.log(this.state.search);
    this.props.dispatch({
      type: "SEARCH_ALL_BARRELS",
      payload: search,
    });
    this.props.dispatch({
      type: "SET_SEARCH_TERM",
      payload: search,
    });
  };
  render() {
    return (
      <div>
        <div>
          <form>
            <div className="searchBarrels">
              <div className="addBarrelInput">
                <span>
                  <TextField
                    id="searchField"
                    label="Search by City or Zipcode"
                    name="search"
                    // placeholder="Search by City or Zipcode"
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(BarrelSearch);

import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import "./BarrelSearch.css";
import searchTerm from "../../redux/reducers/searchTermReducer";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoibmFpbGFqIiwiYSI6ImNrY3V6bXlpaDJkanYycHFycmE2eTlxNnAifQ.xYg_U7x-hAed6a0YpVPIFw';

// const map = new mapboxgl.Map({
//   container: this.mapContainer,
//   style: "mapbox://styles/mapbox/streets-v11",
//   center: [long, lat],
//   zoom: 9,
// });
// new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
// this.setState({
//   host: host,
//   description: description,
//   street: street,
//   city: city,
//   zipcode: zipcode,
//   state: state,
//   type: type,
//   lat: lat,
//   long: long,
//   startDate: startDate,
//   endDate: endDate,
//   // userId: userId,
//   opacity: 100
// });
// console.log("clicked!", this.state.BarrelSearch);


class BarrelSearch extends Component {
  state = {
    search: "",
    toggler: false,
    // showDetails: false,
    // opacity: 0
  };

  componentDidMount() {
    this.props.dispatch({
      type: "SET_SEARCH_TERM",
      payload: "*all",
    });
  }
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(BarrelSearch);

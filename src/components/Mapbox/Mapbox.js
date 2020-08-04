import React, { Component } from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import "./BarrelSearch.css";
import searchTerm from "../../redux/reducers/searchTermReducer";
import mapboxgl from "mapbox-gl";

import moment from "moment";
import { Link } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFpbGFqIiwiYSI6ImNrY3V6bXlpaDJkanYycHFycmE2eTlxNnAifQ.xYg_U7x-hAed6a0YpVPIFw";

class BarrelSearch extends Component {
  state = {
    search: "",
    toggler: false,
    showDetails: false,
    opacity: 0,
  };

  componentDidMount() {
    this.props.dispatch({
      type: "SET_SEARCH_TERM",
    });
  }

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

  handleClick = (
    host,
    description,
    street,
    city,
    zipcode,
    state,
    lat,
    long,
    startDate,
    endDate,
    userId
  ) => {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: 9,
    });
    new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
    this.setState({
      host: host,
      description: description,
      street: street,
      city: city,
      zipcode: zipcode,
      state: state,
      lat: lat,
      long: long,
      startDate: startDate,
      endDate: endDate,
      userId: userId,
      showDetails: true,
      opacity: 100,
    });
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

  render() {
    return (
      <div>
        <div className="searchBarrels">
          <h1>search all locations</h1>
          <div>
            <TextField
              className="addBarrelsInput"
              id="searchInput"
              label="Search"
              value={this.state.search}
              onChange={this.handleInput}
              placeholder="name, keyword, location"
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchIcon style={{ fontSize: 30 }} />
              //     </InputAdornment>
              //   ),
              // }}
            />
            <br />
            <br />
          </div>
          <button className="search" onClick={this.search}>
            Search
          </button>
        </div>
        <div className="searchContainer">
          <div className="searchList"></div>

          <div
            className="additionalDetails"
            style={{ opacity: this.state.opacity }}
          >
            {this.state.showDetails && (
              <div>
                <div className="searchBarrelHeader">
                  <div className="searchBarrelTitle">
                    <h3>{this.state.title}</h3>
                    <p style={{ fontSize: 15 }}>{this.state.barrelName}</p>
                  </div>
                  <Link
                    style={{ color: "#419B2A" }}
                    to={`/barrels/${this.state.userId}`}
                  >
                    View Barrel locations
                  </Link>
                </div>
                <div className="searchBarrelInfo">
                  <div className="searchBarrelDetail">
                    <p style={{ marginTop: 10 }}>
                      {this.state.city}, {this.state.state}
                    </p>
                  </div>
                  <div className="searchBarrelDetail">
                    <p>
                      {moment(this.state.startDate).format("MMM Do, YYYY")} -{" "}
                      {moment(this.state.endDate).format("MMM Do, YYYY")}
                    </p>
                  </div>
                  <div className="searchBarrelDetail"></div>
                </div>
              </div>
            )}
            <div className="map">
              <div
                ref={(el) => (this.mapContainer = el)}
                className="mapContainer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchBarrel,
});

export default connect(mapStateToProps)(BarrelSearch);

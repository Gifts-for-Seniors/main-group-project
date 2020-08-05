import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import "./BarrelClient.css";
import GoogleMap from "../GoogleMap/GoogleMap";
import InsetGoogleMap from "../GoogleMap/BarrelInsetGoogleMap";
import BarrelCard from "../BarrelCard/BarrelCard";
class BarrelClient extends Component {
  componentDidMount() {
    let homeBase = {
      street: "2300 Kennedy Street",
      zipcode: "55413",
    };
    this.props.dispatch({
      type: "SET_MAP_TO_SEARCH",
      payload: homeBase,
    });
  }

  // UPDATE MAP WITH TARGET INFORMATION (*barrel)
  setMapToDisplay = (barrel) => {
    console.log(barrel);
    let data = {
      hosts: barrel.hosts,
      street: barrel.street,
      zipcode: barrel.zipcode,
    };
    this.props.dispatch({
      type: "SET_MAP_TO_SEARCH",
      payload: data,
    });
  };

  /// }
  render() {
    return (
      <div>
        <GoogleMap />
        <p className="covid19Response">
          Covid 19 Response:
          <a
            className="emailAdd"
            href="mailto:carolyn@giftsforseniors.org"
            target="_blank"
          >
            Please click here
          </a>{" "}
          to deliver gift donations at our operations center in Minneapolis.
          Individual appointments are socially distanced and honor CDC
          guidelines. Other drop locations below! You may also browse our Wish
          List for gift ideas.
        </p>
        <div className="clientSearch">
          <BarrelSearch />
        </div>{" "}
        {/* <div className="overlyingList"> */}
        {/* <div className="barrelMap"> */}
        {/* ONLY DISPLAY RELEVANT INFORMATION */}
        {this.props.state.searchBarrels.map((barrel) => {
          if (barrel.status === true) {
            // THESE ARE PRIVATE BARRELS
            return (
              <BarrelCard
                barrel={barrel}
                setMapToDisplay={this.setMapToDisplay}
              />
            );
          } else {
            // THESE ARE PUBLIC BARRELS
            return null;
          }
        })}
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelClient);

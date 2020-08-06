import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import "./BarrelClient.css";
import GoogleMap from "../GoogleMap/GoogleMap";
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
          Covid 19 Response:<a className="email" href="mailto:carolyn@giftsforseniors.org" target="_blank">Please click here</a> to deliver gift donations at our
          operations center in Minneapolis. Individual appointments are socially
          distanced and honor CDC guidelines. Other drop locations below! You
          may also browse our Wish List for gift ideas.
        </p>

        <div className="clientSearch">
          <BarrelSearch />
        </div>
        <ul className="locationLists">
          <div className="barrelMap">
            {/* ONLY DISPLAY RELEVANT INFORMATION */}
            {this.props.state.searchBarrels.map((barrel) => {
              if (barrel.status === true && barrel.public === false) {
                // THESE ARE PRIVATE BARRELS
                return (
                  <div onClick={() => this.setMapToDisplay(barrel)}>
                    <li className="privateBarrels" key={barrel.id}>
                      {barrel.hosts},
                      <ul>
                        <li>
                          {barrel.street} {barrel.city} {barrel.zipcode}
                        </li>
                        <li className="employee">
                          Employees only
                        </li>
                        {barrel.description !== null ? (
                          <li>{barrel.description}</li>
                        ) : null}
                        {barrel.dates !== null ? <li>{barrel.dates}</li> : null}
                        {barrel.hours !== null ? <li>{barrel.hours}</li> : null}
                      </ul>
                    </li>
                  </div>
                );
              } else {
                // THESE ARE PUBLIC BARRELS
                return (
                  <div onClick={() => this.setMapToDisplay(barrel)}>
                    <li className="boldIt" key={barrel.id}>
                      {barrel.hosts} ,
                      <ul>
                        <li>
                          {barrel.street} {barrel.city} {barrel.zipcode}
                        </li>
                        {barrel.description !== null ? (
                          <li>{barrel.description}</li>
                        ) : null}
                        {barrel.dates !== null ? <li>{barrel.dates}</li> : null}
                        {barrel.hours !== null ? <li>{barrel.hours}</li> : null}
                      </ul>
                    </li>
                  </div>
                );
              }
            })}
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelClient);

import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import "./BarrelClient.css";
import GoogleMap from "../GoogleMap/GoogleMap";
class BarrelClient extends Component {
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
  render() {
    return (
      <div>
        <GoogleMap />
        <p className="covid19Response">
          Covid 19 Response: Please click here to deliver gift donations at our
          operations center in Minneapolis. Individual appointments are socially
          distanced and honor CDC guidelines. Other drop locations below! You
          may also browse our Wish List for gift ideas.
        </p>

        <div className="clientSearch">
          <BarrelSearch />
        </div>
        <ul className="locationLists">
          <div className="barrelMap">
            {this.props.state.searchBarrels.map((barrel) => {
              if (barrel.status === true) {
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
                        ) : (
                          <div></div>
                        )}
                        {barrel.dates !== null ? (
                          <li>{barrel.dates}</li>
                        ) : (
                          <div></div>
                        )}
                        {barrel.hours !== null ? (
                          <li>{barrel.hours}</li>
                        ) : (
                          <div></div>
                        )}
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

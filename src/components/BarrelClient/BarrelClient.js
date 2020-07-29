import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import "./BarrelClient.css";
class BarrelClient extends Component {
  render() {
    return (
      <div>
        <p>
          Covid 19 Notice: Please click here to deliver gift donations at our
          operations center in Minneapolis. Individual appointments are socially
          distanced and honor CDC guidelines. Other drop locations below! You
          may also browse our Wish List for gift ideas.
        </p>
        <div className="clientSearch">
          <BarrelSearch />
        </div>
        <ul className="locationLists">
          <div>
            {this.props.state.searchBarrels.map((barrel) => {
              if (barrel.status === true) {
                return (
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

import React, { Component } from "react";
import { connect } from "react-redux";
import BarrelSearch from "../BarrelAdmin/BarrelSearch";

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
        <BarrelSearch />
        <ul>
          <div>
            {this.props.state.barrels.map((barrel) => {
              return (
                <li>
                  {barrel.hosts} - {barrel.street}, {barrel.city}{" "}
                  {barrel.zipcode} {barrel.description} {barrel.hours}
                </li>
              );
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

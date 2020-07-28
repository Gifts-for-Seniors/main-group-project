import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";

class BarrelTable extends Component {
  render() {
    console.log(this.props.state.user);
    console.log(this.props.state.searchBarrels);
    let barrels = this.props.state.searchBarrels;
    return (
      <div>
        {this.props.state.searchBarrels.map((item) => {
          return (
            <div>
              <ul>
                <li>{item.hosts}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelTable);

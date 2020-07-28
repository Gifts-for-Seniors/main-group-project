import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input } from "@material-ui/core";

class BarrelTable extends Component {
  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>Host</th>
              <th>Street Number</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.searchBarrels.map((item) => {
              return (
                <tr className="insertItem">
                  <td>{item.hosts}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.zipcode}</td>
                  <td>{item.description}</td>
                  <td>{String(item.status)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelTable);

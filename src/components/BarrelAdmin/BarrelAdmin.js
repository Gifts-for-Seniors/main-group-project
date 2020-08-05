import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import BarrelTable from "../BarrelTable/BarrelTable";
import BarrelInput from "../BarrelInputForm/BarrelInputForm";
import NewerBarrelTable from "../BarrelTable/NewerBarrelTable";
class BarrelAdmin extends Component {
  render() {
    return (
      <div className="barrelForm">
        <BarrelInput />
        <div id="adminSearch" className="barrelSearch">
          <BarrelSearch />
        </div>
        <NewerBarrelTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);

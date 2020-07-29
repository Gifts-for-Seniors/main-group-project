import React, { Component } from "react";
import { connect } from "react-redux";
import "./BarrelAdmin.css";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import BarrelSearch from "../BarrelSearch/BarrelSearch";
import BarrelTable from "../Table/Table";
import BarrelInput from "../BarrelInputForm/BarrelInputForm";
class BarrelAdmin extends Component {
  render() {
    return (
      <div className="barrelForm">
        <BarrelInput />
        <BarrelSearch />
        <BarrelTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelAdmin);

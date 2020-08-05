import React, { Component } from "react";
let item = this.props.item;

class BarrelData extends Component {
  render() {
    return (
      <tr className="barrelItem">
        <td>{item.hosts}</td>
        <td>{item.street}</td>
        <td>{item.city}</td>
        <td>{item.zipcode}</td>
        <td>{item.dates}</td>
        <td>{item.hours}</td>
        <td>{item.description}</td>
        <td>{item.status ? "Active" : "Deactivated"}</td>
        <td>{item.public ? "Public" : "Private"}</td>

        <td>
          <i
            class="edit icon"
            onClick={() => {
              this.editItem(item);
            }}
          ></i>
        </td>
      </tr>
    );
  }
}

export default BarrelData;

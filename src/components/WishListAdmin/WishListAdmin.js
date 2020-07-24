import React, { Component } from "react";
import { connect } from "react-redux";

import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import LogOutButton from "../LogOutButton/LogOutButton";

class WishListAdmin extends Component {
  state = {
    item: "",
  };

  updatePriority = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      priority: item.priority,
    };
    this.props.dispatch({
      type: "UPDATE_PRIORITY",
      payload: data,
    });
  };

  render() {
    return (
      <div className="adminView">
        <h1>Admin WishList</h1>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Edit</th>
              <th>Select High Priority</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Mapping through our item reducer to display items marked as high priority */}
          {this.props.state.list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.item}</td>
                <td>
                  <StyledButton value={item.id}>Edit</StyledButton>
                </td>
                <td>
                  <input
                    onChange={() => {
                      this.updatePriority(item);
                    }}
                    type="checkbox"
                    checked={item.priority}
                  />
                </td>
                <td>
                  <RemoveButton value={item.id}>Delete</RemoveButton>
                </td>
              </tr>
            );
          })}
        </table>
        <br></br>
        <br></br>

        <h2>Add an Item</h2>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Select High Priority</th>
              <th>Save Item</th>
            </tr>
            <tr>
              <td>
                <input type="text"></input>
              </td>
              <td className="checkBox">
                <StyledCheckbox type="checkbox"></StyledCheckbox>
              </td>
              <td>
                <StyledButton onClick={() => this.addItem()}>
                  Save New Item
                </StyledButton>
              </td>
            </tr>
          </thead>
        </table>
        <LogOutButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishListAdmin);

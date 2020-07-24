import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import LogOutButton from "../LogOutButton/LogOutButton";

class WishListAdmin extends Component {
  state = {
    item: "",
    itemToEdit: 0,
    itemDescription: "",
    // itemPriority: true
  };

  editItem = (id, description) => {
    console.log("in edit", id, description);

    this.setState({
      ...this.state,
      itemToEdit: id,
      itemDescription: description,
    });
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  trackEdit = (event) => {
    this.setState({
      itemDescription: event.target.value,
    });
  };

  saveEdit = () => {
    this.props.dispatch({
      type: "EDIT_ITEM",
      payload: this.state,
    });

    this.setState({
      ...this.state,
      itemToEdit: 0,
      itemDescription: "",
    });
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

          <tbody>
            {/* Mapping through our item reducer to display items marked as high priority */}
            {this.props.state.list.map((item) => {
              if (item.id === this.state.itemToEdit) {
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        size="125"
                        type="text"
                        value={this.state.itemDescription}
                        onChange={this.trackEdit}
                      ></input>
                    </td>
                    <td>
                      <StyledButton
                        value={item.id}
                        onClick={(event) => this.saveEdit(event)}
                      >
                        Save
                      </StyledButton>
                      <StyledButton value={item.id} onClick={this.cancelEdit}>
                        Cancel
                      </StyledButton>
                    </td>
                    <td>
                      <input type="checkbox" value="true" />
                    </td>
                    <td>
                      <button value={item.id}>Delete</button>
                    </td>
                  </tr>
                );
              } else
                return (
                  <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>
                      <StyledButton
                        value={item.id}
                        onClick={() => this.editItem(item.id, item.item)}
                      >
                        Edit
                      </StyledButton>
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
          </tbody>
        </table>
        <br></br>
        <br></br>
        <h2>Insert new item</h2>

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishListAdmin);

import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import LogOutButton from "../LogOutButton/LogOutButton";
import { Input } from "@material-ui/core";
import "./WishListAdmin.css";

class WishListAdmin extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ADMIN_BARRELS" });
  }
  state = {
    item: "",
    itemToEdit: 0,
    itemDescription: "",
    newItemPriority: false,
    newItemDescription: "",
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

  trackEdit = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  trackNewItemPriority = (event) => {
    this.setState({
      ...this.state,
      newItemPriority: !this.state.newItemPriority,
    });

    console.log(this.state.newItemPriority);
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
  deleteItem = (id) => {
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
    console.log("payload", id);
  };

  addItem = () => {
    console.log("item description", this.state.newItemDescription);
    console.log("high priority", this.state.newItemPriority);

    this.props.dispatch({
      type: "ADD_ITEM",
      payload: this.state,
    });
    this.setState({
      newItemPriority: false,
      newItemDescription: "",
    });
  };

  render() {
    return (
      <div className="adminView">
        {/* <h1>Admin WishList</h1> */}

        <table className="wishListAdminTable">
          <thead>
            <tr>
              <th className="tableTitle">Current Wishlist</th>
              <th>Select Priority</th>
              <th>Edit</th>
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
                      <Input
                        autoFocus="true"
                        className="editInput"
                        type="text"
                        label={this.state.itemDescription}
                        value={this.state.itemDescription}
                        variant="filled"
                        onChange={(event) =>
                          this.trackEdit(event, "itemDescription")
                        }
                      />
                    </td>
                    <td className="checkBox">
                      <StyledCheckbox
                        onChange={() => {
                          this.updatePriority(item);
                        }}
                        type="checkbox"
                        checked={item.priority}
                      />
                    </td>
                    <td className="buttonRow">
                      <StyledButton
                        className="editButtons"
                        value={item.id}
                        onClick={(event) => this.saveEdit(event)}
                      >
                        Save
                      </StyledButton>
                    </td>

                    <td className="buttonRow">
                      <RemoveButton
                        className="editButtons"
                        value={item.id}
                        onClick={this.cancelEdit}
                      >
                        Undo
                      </RemoveButton>
                    </td>
                  </tr>
                );
              } else
                return (
                  <tr key={item.id}>
                    <td onDoubleClick={() => this.editItem(item.id, item.item)}>
                      {item.item}
                    </td>
                    <td className="checkBox">
                      <StyledCheckbox
                        onChange={() => {
                          this.updatePriority(item);
                        }}
                        // type="checkbox"
                        checked={item.priority}
                      />
                    </td>
                    <td className="buttonRow">
                      <StyledButton
                        className="editButtons"
                        value={item.id}
                        onClick={() => this.editItem(item.id, item.item)}
                      >
                        Edit
                      </StyledButton>
                    </td>

                    <td className="buttonRow">
                      <RemoveButton onClick={() => this.deleteItem(item.id)}>
                        Delete
                      </RemoveButton>
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <h2 className="wishHeader">Add to Wishlist</h2>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Select Priority</th>
              <th>Add Item</th>
            </tr>
          </thead>
          <tr className="insertItem">
            <td>
              <Input
                className="addItemInput"
                onChange={(event) => {
                  this.trackEdit(event, "newItemDescription");
                }}
                placeholder="Add item description please.."
                type="text"
              ></Input>
            </td>
            <td className="checkBox">
              <StyledCheckbox
                type="checkbox"
                onChange={this.trackNewItemPriority}
              />
            </td>
            <td className="buttonRow">
              <StyledButton
                className="addButton"
                onClick={() => this.addItem()}
              >
                Add
              </StyledButton>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishListAdmin);

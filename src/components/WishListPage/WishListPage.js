import React, { Component } from "react";
import { connect } from "react-redux";
import "./WishListPage.css";
import { SearchButton } from "../ButtonStyles/Buttons";
class WishList extends Component {
  goToBarrelPage = () => {
    this.props.history.push("/barrels");
  };

  render() {
    return (
      <div>
        <h1 id="wishListHeader">WishList</h1>

        <div className="highPriorityItems">
          <div className="priorityHeader">
            <h2>High Priority Items</h2>
          </div>

          {/* Mapping through our item reducer to display items marked as high priority */}
          {this.props.state.list.map((item) => {
            if (item.priority === true) {
              return <ul key={item.id}>{item.item}</ul>;
            }
          })}
        </div>

        <div className="priorityHeader">
          <h2>Other Items</h2>
        </div>
        <div className="regularItems">
          {/* Mapping through our item reducer to display remaining items */}
          {this.props.state.list.map((item) => {
            if (item.priority === false) {
              return <ul key={item.id}>{item.item}</ul>;
            }
          })}
        </div>
        <div className="buttons">
          <SearchButton className="links" onClick={this.goToBarrelPage}>
            Drop-Off Locations
          </SearchButton>
          <SearchButton className="links">
           Amazon WishList
          </SearchButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishList);

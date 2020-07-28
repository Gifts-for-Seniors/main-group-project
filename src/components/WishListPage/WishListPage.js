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
          <div id="highPriority" className="priorityHeader">
            <h2>High Priority Items</h2>
          </div>

          {/* Mapping through our item reducer to display items marked as high priority */}
          {this.props.state.list.map((item) => {
            if (item.priority === true) {
              return <ul key={item.id}>{item.item}</ul>;
            }
          })}
        </div>

        <div className="regularItems">
          <div className="priorityHeader">
            <h2>Other Items</h2>
          </div>

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
          {/* <SearchButton className="links"> <a href="https://smile.amazon.com/?_encoding=UTF8&pldnNewCustomer=1&ref_=smi_ge2_cnf_cnf_smi#/"></a>Amazon WishList</SearchButton> */}
          <SearchButton className="links"> <a href="https://smile.amazon.com/hz/wishlist/ls/X1CA7P20SWPM?type=wishlist&ref=cm_wl_list_create">Amazon Smile Wishlist</a></SearchButton>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishList);

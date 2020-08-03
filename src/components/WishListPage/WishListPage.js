import React, { Component } from "react";
import { connect } from "react-redux";
import "./WishListPage.css";
import { Card } from "@material-ui/core";
import { SearchButton } from "../ButtonStyles/Buttons";
import happy from './happiness.jpg'

class WishList extends Component {
  goToBarrelPage = () => {
    this.props.history.push("/barrels");
  };

  render() {
    return (
      <div>
        {/* <h1 id="wishListHeader">WishList</h1> */}
        <div className="sentimentalMessage">

          <p>
            Older people are especially vulnerable to loneliness and social
            isolation – and it can have a serious effect on health. But there
            are ways to overcome loneliness, even if you live alone and find it
            hard to get out. Help us connect with the elderly by donating some
            of the most desired items!
          </p>
        </div>
        <Card>
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
          <img className="happy-image" src={happy}></img>
        </Card>

        <Card>
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
        </Card>
        <div className="buttons">
          <SearchButton className="links" onClick={this.goToBarrelPage}>
            Drop-Off Locations
          </SearchButton>
          <SearchButton className="links">
            <a href="https://smile.amazon.com/hz/wishlist/ls/X1CA7P20SWPM?type=wishlist&ref=cm_wl_list_create">
              Amazon Wishlist
            </a>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import "./WishListPage.css";
import Gallery from "../WishlistGallery/Gallery";
import { Button, Paper, Typography } from "@material-ui/core";

class WishList extends Component {
  goToBarrelPage = () => {
    this.props.history.push("/barrels");
  };

  render() {
    return (
      <div>
        <Gallery />
        <Paper className="paper">
          <div className="main">
            <Typography>There are two ways to ensure your donations reach Gifts for Seniors.</Typography>
            <Typography>Shop out gift registeries and ship directly to Gifts for Seniors.</Typography>
            <Button style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}} variant="outlined" className="button">Donate Online</Button>
            <Typography>Locate a donation barrel and drop off gifts in your community.</Typography>
            <Button style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}} variant="outlined" className="button">Find Drop off Location</Button>
            <Typography style={{width: '70%', marginLeft: '18%'}}>
              Checkout our senior wish list for our current priority needs.
              Once you make your donation, Gifts for Seniors will work with agency partners to coordinate the delivery of the gifts
              and social visits to seniors.
            </Typography>
            <Button style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}} variant="outlined" className="button">High Priority List</Button>
            <Typography>Your donation is greatly appreciated.</Typography>
            <Typography>Thank you for helping Gifts for Seniors provide life-affirming gifts for isolated older adults in need.</Typography>
          </div>
          
        </Paper>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WishList);

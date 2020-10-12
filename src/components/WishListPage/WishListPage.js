import React, { Component } from "react";
import { connect } from "react-redux";
import "./WishListPage.css";
import Gallery from "../WishlistGallery/Gallery";
import { Button, Dialog, DialogActions, Paper, Typography, DialogTitle, DialogContent, Grid } from "@material-ui/core";
import PrintList from "./PriorityList";
import { withRouter } from 'react-router-dom';

class WishList extends Component {
  constructor() {
    super()
    this.redirectToMap = this.redirectToMap.bind(this);
    this.state = {
      open: false,
      priorityDialogOpen: false
    }
  }
  
  goToBarrelPage = () => {
    this.props.history.push("/barrels");
  };

  showShoppingDialog = () => {
    this.setState({ open: true })
  }

  handlePriorityClose = () => {
    this.setState({ priorityDialogOpen: false })
  }

  showHighPrioriorityDialog = () => {
    this.setState({ priorityDialogOpen: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  redirectToAmazon = () => {
    window.open('https://smile.amazon.com', '_blank')
  }

  redirectToBestBuy = () => {
    window.open('https://www.bestbuy.com', '_blank')
  }

  redirectToTarget = () => {
    window.open('https://www.target.com', '_blank')
  }

  redirectToMap = () => {
    let path = `barrels`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Gallery />
        <Paper className="paper">
          <div className="main">
            <Typography>There are two ways to ensure your donations reach Gifts for Seniors.</Typography>
            <Typography>Shop out gift registeries and ship directly to Gifts for Seniors.</Typography>
            <Button
              style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}}
              variant="outlined"
              className="button"
              onClick={() => {
                this.showShoppingDialog()
              }}
            >
              Donate Online
            </Button>
            <Dialog onClose={this.handleClose} maxWidth="lg" open={this.state.open}>
              <DialogTitle onClose={this.handleClose}>
                Online Retailers and Shopping List
              </DialogTitle>
              <DialogContent dividers>
                <Grid container>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    <Button
                      style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', float: 'right'}}
                      variant="outlined"
                      className="button"
                      onClick={() => {
                        this.redirectToAmazon()
                      }}
                      >
                      Amazon Smile
                    </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', float: 'right'}}
                      variant="outlined"
                      className="button"
                      onClick={() => {
                        this.redirectToBestBuy()
                      }}
                      >
                      Best Buy
                    </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', float: 'right'}}
                      variant="outlined"
                      className="button"
                      onClick={() => {
                        this.redirectToTarget()
                      }}
                      >
                      Target
                  </Button>
                  </Grid>
                </Grid>
                  <Paper variant="outlined" style={{ marginTop: 10 }}>
                    <PrintList />
                  </Paper>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={this.handleClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography>Locate a donation barrel and drop off gifts in your community.</Typography>
            <Button
              style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}}
              variant="outlined"
              className="button"
              onClick={this.redirectToMap}
            >
              Find Drop off Location
            </Button>
            <Typography style={{width: '70%', marginLeft: '18%'}}>
              Checkout our senior wish list for our current priority needs.
              Once you make your donation, Gifts for Seniors will work with agency partners to coordinate the delivery of the gifts
              and social visits to seniors.
            </Typography>
            <Button
              style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}}
              variant="outlined"
              className="button"
              onClick={() => {
                this.showHighPrioriorityDialog()
              }}
            >
              High Priority List
            </Button>
            <Dialog onClose={this.handlePriorityClose} maxWidth="lg" open={this.state.priorityDialogOpen}>
            <DialogTitle onClose={this.handlePriorityClose}>
                High Priority Items
              </DialogTitle>
              <DialogContent dividers>
                <PrintList />
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={this.handlePriorityClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
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

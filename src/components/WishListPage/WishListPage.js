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
    window.open('https://smile.amazon.com/gp/clpf/ref=smi_se_clpf_rd_clpf', '_blank')
  }

  redirectToBestBuy = () => {
    window.open('https://www.myregistry.com/wishlist/gfs-seniors-minneapolis-mn/2561305', '_blank')
  }

  redirectToTarget = () => {
    window.open('https://www.target.com/gift-registry/giftgiver?registryId=07082930f60f4a85986b61da26dc3ea8&lnk=registry_custom_url', '_blank')
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
            <Typography style={{fontSize: 15}}><i><b>There are two ways to ensure your donations reach Gifts for Seniors.</b></i></Typography>
            <Typography style={{fontSize: 15}}>Shop our gift registries and ship directly to Gifts for Seniors.</Typography>
            {/* <Button
              style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}}
              variant="outlined"
              className="button"
              onClick={() => {
                this.showShoppingDialog()
              }}
            >
              Donate Online
            </Button> */}
            <Grid container>
                  <Grid item xs={2}></Grid>                 
                  <Grid item xs={3}>
                    <Button
                      className="app-button app-link"
                      size="large"
                      color="primary"
                      onClick={() => {
                        this.redirectToAmazon()
                      }}
                      >
                      Amazon Smile
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button                                         
                      className="app-button app-link"
                      size="large"
                      color="primary"
                      onClick={() => {
                        this.redirectToBestBuy()
                      }}
                      >
                      Best Buy
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button                      
                      className="app-button app-link"
                      size="large"
                      color="primary"
                      onClick={() => {
                        this.redirectToTarget()
                      }}
                      >
                      Target
                  </Button>
                  </Grid>
                </Grid>

            {/* <Dialog onClose={this.handleClose} maxWidth="lg" open={this.state.open}>
              <DialogTitle onClose={this.handleClose}>
                Online Retailers and Shopping List
              </DialogTitle>
              <DialogContent dividers>
                <Grid container>
                  <Grid item xs={2}></Grid>                 
                  <Grid item xs={3}>
                    <Button                      
                      className="app-button app-link"
                      size="large"
                      color="primary"
                      onClick={() => {
                        this.redirectToAmazon()
                      }}
                      >
                      Amazon Smile
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button                                         
                      className="app-button app-link"
                      size="large"
                      color="primary"
                      onClick={() => {
                        this.redirectToBestBuy()
                      }}
                      >
                      Best Buy
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button                      
                      className="app-button app-link"
                      size="large"
                      color="primary"
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
                <Button autoFocus onClick={this.handleClose}
                 color="primary"
                 style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', float: 'right'}}
                 variant="outlined"
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog> */}
            <Typography style={{fontSize: 15}}>Locate a donation barrel and drop off gifts in your community.</Typography>
            <Button
              style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', marginBottom: 10, marginTop: 10}}
              variant="outlined"
              className="button"
              onClick={this.redirectToMap}
            >
              Find Drop off Location
            </Button>
            <Typography style={{width: '70%', marginLeft: '18%', fontSize: 15}}>
              Check out our senior wish list for current priority needs.
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
                <Button autoFocus onClick={this.handlePriorityClose}
                 color="primary"
                 style={{backgroundColor: 'rgb(54, 108, 217)', color:'#fff', float: 'right'}}
                 variant="outlined"
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography style={{fontSize: 15}}>Your donation is greatly appreciated.</Typography>
            <Typography style={{fontSize: 15}}>Thank you for helping Gifts for Seniors provide life-affirming gifts for isolated older adults in need.</Typography>
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

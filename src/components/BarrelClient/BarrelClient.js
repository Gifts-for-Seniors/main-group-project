import React, { Component } from 'react';
import BarrelLocationsMap from '../BarrelLocationsMap/BarrelLocations';
import ZipcodeFilter from '../ZipcodeFilter/ZipcodeFilter';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import BarrelSearch from '../BarrelSearch/BarrelSearch';
import './BarrelClient.css';
import GoogleMap from '../GoogleMap/GoogleMap';
import InsetGoogleMap from '../GoogleMap/BarrelInsetGoogleMap';

import BarrelCard from '../BarrelCard/BarrelCard';
import { Button, Card, Image, Label, Grid } from 'semantic-ui-react';
import CovidReponse from './CovidResponse';
import Footer from '../Footer/Footer';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class BarrelClient extends Component {
  componentDidMount() {
    let homeBase = {
      street: '2300 Kennedy Street',
      zipcode: '55413',
    };
    this.props.dispatch({
      type: 'SET_MAP_TO_SEARCH',
      payload: homeBase,
    });

    // this.getMap(this.props.state.searchBarrels);
  }

  getBarrelLocationsMap = (barrelLocations) => {
    // console.log('Barrel Locations', barrelLocations);
    // const googleMapJSX;
    // return googleMapJSX;
  };

  // UPDATE MAP WITH TARGET INFORMATION (*barrel)
  setMapToDisplay = (barrel) => {
    // console.log(barrel);
    let data = {
      hosts: barrel.hosts,
      street: barrel.street,
      zipcode: barrel.zipcode,
    };

    this.props.dispatch({
      type: 'SET_MAP_TO_SEARCH',
      payload: data,
    });
  };

  /// }
  render() {
    return (
      <div className='barrel-locations'>
        <div className='barrel-header'>
          <h1>FIND A BARREL</h1>
          <h3>
            Find a blue donation barrel location on the map nearest you. Donate
            today to impact someones life tomorrow.
          </h3>

          <p className='set-appointment-text'>
            We invite you to drop off your gift donations at our operations
            center in Minneapolis. Appointments are social distanced and follow
            CDC guidelines. To set up a contact time please contact us via
            email!
          </p>
          <div className='contact-us'>
            <a
              className='emailAdd'
              href='mailto:carolyn@giftsforseniors.org'
              target='_blank'
            >
              EMAIL US
            </a>
          </div>
        </div>
        <ZipcodeFilter
          state={this.props.state}
          barrelLocations={this.props.state.searchBarrels}
          setBarrelMap={this.setMapToDisplay}
        ></ZipcodeFilter>
        <GoogleMap state={this.state}></GoogleMap>
        {/* <div className="barrel-locations-header">
          <h2 className="location-header">Barrel Locations Map</h2>
          <p className="pin-info">Click/Touch pin for donation location details</p>
        </div>
        <BarrelLocationsMap
          barrelLocations={this.props.state.searchBarrels}
        ></BarrelLocationsMap> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelClient);

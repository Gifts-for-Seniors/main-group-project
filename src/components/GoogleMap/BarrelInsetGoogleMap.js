import React, { Component } from "react";
import { connect } from "react-redux";
import "./GoogleMap.css";
import { Image } from "semantic-ui-react";
class InsetGoogleMap extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.state.searchTerm);
    let street = this.props.barrel.street;
    let zipcode = this.props.barrel.zipcode;
    let city = this.props.barrel.city;
    let host = this.props.barrel.host;

    let imageSource = `https://maps.googleapis.com/maps/api/staticmap?
    center=Minneapolis, MN&zoom=10&size=600x600&maptype=roadmap&markers=color:blue%7label:${host}%7${street}+${zipcode}+${city}"
    &key=AIzaSyBbn4YPkDlirgm-dFmTs_YvN6h-lSD7MoE`;
    let test = `https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=10&size=350x350&markers=size:large%7Ccolor:blue%7C${street}+${zipcode}&key=AIzaSyBbn4YPkDlirgm-dFmTs_YvN6h-lSD7MoE
`;
    console.log(this.props.barrel);
    return (
      // RENDER A DEFAULT MAP WITH GIFTS FOR SENIORS LOCATION
      <Image size="small" src={test}></Image>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(InsetGoogleMap);

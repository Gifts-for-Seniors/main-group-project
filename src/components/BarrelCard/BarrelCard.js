import React, { Component } from "react";
import { connect } from "react-redux";
import "../BarrelClient/BarrelClient.css";
import GoogleMap from "../GoogleMap/GoogleMap";
import InsetGoogleMap from "../GoogleMap/BarrelInsetGoogleMap";
import { Button, Card, Image, Label } from "semantic-ui-react";
import "./BarrelCard.css";
class BarrelCard extends Component {
  render() {
    let barrel = this.props.barrel;
    console.log(this.props.barrel);

    return (
      <Card.Group itemsPerRow={5}>
        {this.props.barrel.public ? (
          <Card
            color="red"
            className="privateBarrel"
            onClick={() => this.props.setMapToDisplay(barrel)}
          >
            <Image>
              <InsetGoogleMap barrel={barrel} />
            </Image>
            <Card.Content class="content">
              <Card.Header key={barrel.id}>
                {barrel.hosts},
                <Card.Description>{barrel.street}</Card.Description>
                <Card.Description>
                  {barrel.city} MN, {barrel.zipcode}
                </Card.Description>
                <div>
                  {barrel.description !== null ? (
                    <Label>Details: {barrel.description}</Label>
                  ) : null}
                  {barrel.dates !== null ? (
                    <Label>Dates: {barrel.dates}</Label>
                  ) : null}
                  {barrel.hours !== null ? (
                    <Label>Hours: {barrel.hours}</Label>
                  ) : null}
                </div>
              </Card.Header>
            </Card.Content>
          </Card>
        ) : (
          <Card
            color="red"
            className="public-barrel"
            onClick={() => this.props.setMapToDisplay(barrel)}
          >
            <Card.Content>
              *<Label>Private Location for Employees Only</Label>
            </Card.Content>
            <Image fluid>
              <InsetGoogleMap barrel={barrel} />
            </Image>
            <Card.Content class="content">
              <Card.Header key={barrel.id}>
                {barrel.hosts},
                <Card.Description>
                  {barrel.street} {barrel.city} {barrel.zipcode}
                </Card.Description>
                <div>
                  {barrel.description !== null ? (
                    <Label>Details: {barrel.description}</Label>
                  ) : null}
                  {barrel.dates !== null ? (
                    <Label>Dates: {barrel.dates}</Label>
                  ) : null}
                  {barrel.hours !== null ? (
                    <Label>Hours: {barrel.hours}</Label>
                  ) : null}
                </div>
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelCard);

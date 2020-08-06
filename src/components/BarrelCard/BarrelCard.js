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
      <div>
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
              <Card.Header className="hostHeader" key={barrel.id}>
                {barrel.hosts},
                <Card.Description>{barrel.street}</Card.Description>
                <Card.Description>
                  {barrel.city} MN, {barrel.zipcode}
                </Card.Description>
              </Card.Header>

              <Label.Group>
                {barrel.description !== null ? (
                  <Label color="blue">Details: {barrel.description}</Label>
                ) : null}
                {barrel.dates !== null ? (
                  <Label color="blue">Dates: {barrel.dates}</Label>
                ) : null}
                {barrel.hours !== null ? (
                  <Label color="blue">Hours: {barrel.hours}</Label>
                ) : null}
              </Label.Group>
            </Card.Content>
          </Card>
        ) : (
          <Card
            color="red"
            className="public-barrel"
            label={{ as: "p", corner: "left", icon: "map marker alternate" }}
            onClick={() => this.props.setMapToDisplay(barrel)}
          >
            <Card.Content>
              <Label circular color="blue" ribbon>
                Private Location for Employees Only
              </Label>
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
                <Label.Group>
                  {barrel.description !== null ? (
                    <Label color="blue">Details: {barrel.description}</Label>
                  ) : null}
                  {barrel.dates !== null ? (
                    <Label color="blue">Dates: {barrel.dates}</Label>
                  ) : null}
                  {barrel.hours !== null ? (
                    <Label color="blue">Hours: {barrel.hours}</Label>
                  ) : null}
                </Label.Group>
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelCard);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./GoogleMap.css";
class GoogleMap extends Component {
    render() {
        console.log(this.props.state.searchTerm);
        let searchTerm = this.props.state.searchTerm;
        let mapSource = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDXhJ8NfOUez_7i1OqfK5dX4bglT185TI0
    &q=${searchTerm}`;


        if (searchTerm === "*all") {
            return (
                <div className="map">
                    <iframe
                        width="600"
                        height="450"
                        frameborder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDXhJ8NfOUez_7i1OqfK5dX4bglT185TI0
    &q=2300+Kennedy+Street+NE+Minneapolis+MN+55413"
                        allowfullscreen
                    ></iframe>
                </div>
            );
        } else {
            return (
                <div className="map">
                    <iframe
                        width="600"
                        height="450"
                        frameborder="0"
                        src={mapSource}
                        allowfullscreen
                    ></iframe>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    state,
});

export default connect(mapStateToProps)(GoogleMap);


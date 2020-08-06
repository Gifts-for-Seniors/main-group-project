import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import Participant1 from "./Participant1.jpg";
import sweater from "./sweater.jpg";
import slippers from "./slippers.JPG";
import Gifts from "./Gifts.jpg";
import blanket from "./blanket.jpg";
import lobby from "./lobby.JPG";
import gDrive from "./gDrive.jpg";
import open from "./open.jpg";
import happy from "./happy.jpg";
import puzzle from "./puzzle.jpg";

class MyComponent extends Component {
    render() {

        const images = [
            { original: Participant1, },
            { original: sweater, },
            { original: slippers, },
            { original: puzzle, },
            { original: Gifts, },
            { original: blanket, },
            { original: lobby, },
            { original: gDrive, },
            { original: open, },
            { original: happy, },
        ];


        const someComponent = props => {
            // console.log(props.someProps.objectKey)
            return <div>{/* {props.someProps.objectKey} */}</div>;
        };

        return (
            <ImageGallery
                items={images}
                // defaultImage={defaultImage}
                showBullets={false}
                showIndex={false}
                lazyLoad={true}
                showPlayButton={false}
                renderCustomControls={someComponent}
                autoPlay={true}
            />
        );
    }
}

export default MyComponent;
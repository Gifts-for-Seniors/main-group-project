// import React, { Component } from "react";
// import { connect } from "react-redux";
// import ImageGallery from "react-image-gallery";
// import happy from "./happiness.jpg";


// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];

// class MyGallery extends Component {
//     render() {
//         return <ImageGallery items={images} className="happy-image" src={happy} />;
//     }
// }
// {/* <img className="happy-image" src={happy}></img> */ }


// export default connect(MyGallery);

import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Connect from 'react-redux';
import defaultImage from "./happiness.jpg";
// import "./styles.css";

class MyComponent extends Component {
    render() {
        const images = [
            {
                original: "http://lorempixel.com/1000/600/nature/1/",
                thumbnail: "http://lorempixel.com/250/150/nature/1/"
            },
            {
                original: "http://lorempixel.com/1000/600/nature/2/",
                thumbnail: "http://lorempixel.com/250/150/nature/2/"
            },
            {
                original: "http://lorempixel.com/1000/600/nature/3/",
                thumbnail: "http://lorempixel.com/250/150/nature/3/"
            }
        ];

        const someComponent = props => {
            // console.log(props.someProps.objectKey)
            return <div>{/* {props.someProps.objectKey} */}</div>;
        };

        return (
            <ImageGallery
                items={images}
                defaultImage={defaultImage}
                showBullets={true}
                showIndex={true}
                showThumbnails={false}
                lazyLoad={true}
                showPlayButton={false}
                renderCustomControls={someComponent}
            />
        );
    }
}

export default MyComponent;
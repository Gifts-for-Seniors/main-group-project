import React, { Component } from "react";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Participant1 from "../../images/Participant1.jpg";
import sweater from "../../images/sweater.jpg";
import slippers from "../../images/slippers.JPG";
import Gifts from "../../images/Gifts.jpg";
import puzzle from "../../images/puzzle.jpg";
import { GridList } from "@material-ui/core";
import "./Gallery.css";

class CustomGallery extends Component {
  render() {
    const tileData = [
      {
        img: Participant1,
        title: 'Joy'
      },
      {
        img: sweater,
        title: 'Sweater'
      },
      {
        img: slippers,
        title: 'Slippers'
      },
      {
        img: puzzle,
        title: 'Happiness'
      },
      {
        img: Gifts,
        title: 'Gifts'
      }
    ]

    return (
      <div className="root">
      <GridList className="gridList" cols={5}>
        {tileData.map((tile) => (
          <GridListTile style={{height: 450}} key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    );
  }
}

export default CustomGallery;

import React, { Component } from "react";
import image_2 from "../Imgs/2.jpg";
import image_3 from "../Imgs/3.jpeg";
import image_17 from "../Imgs/17.jpeg";
import image_18 from "../Imgs/18.jpeg";
import image_16 from "../Imgs/16.jpeg";
import image_21jpg from "../Imgs/21.jpg";
import image_4 from "../Imgs/4.jpg";
import "../Css/Wedding.css";

import Gallary from "react-photo-gallery";
const photos = [
  {
    src: require("../Imgs/2.jpg"),
    width: 4,
    height: 3,
  },
  {
    src: require("../Imgs/3.jpeg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../Imgs/4.jpg"),
    width: 4,
    height: 2,
  },
  {
    src: require("../Imgs/16.jpeg"),
    width: 1,
    height: 1,
  },
];
class Wedding extends Component {
  render() {
    return (
      <div
        className="Wedding "
        style={{
          backgroundColor: "black",
          color: "whitesmoke",
          paddingTop: "5%",
          paddingBottom: "1%",
        }}
      >
        <h1 className="display-3">Weddings</h1>
        
        <div className="container">
        <Gallary photos={photos} />
          
        </div>
      </div>
    );
  }
}

export default Wedding;

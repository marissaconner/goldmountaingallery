import React, { Component } from "react";

class MainGallery extends Component {
  constructor(props) {
    super(props);
    /*I need to go through the artist data which makes it to here as an OBJECT which has OBJECTS in it: { matt-downer: {xyz} , michelle-marocco: {xyz} */

    let artistArray = Object.keys(props.artistData);
    let imageList = [];
    console.log(artistArray);
    for (var i = 0; i < 12; i++) {
      /*Go through each of the artist data's galleries and deliver image[i] if it exists */
      for (var i2 = 0; i2 < artistArray.length; i2++) {
        var nextImage = props.artistData[artistArray[i2]].galleryItems[i];
        if (nextImage !== undefined) {
          imageList.push(nextImage);
        }
      }
    }

    this.state = {
      images: imageList
    };
  }

  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <div>
            <img className="img-responsive" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    );
  }
}

const MainGalleryEntry = () => <div>Gallery Entry</div>;

export default MainGallery;

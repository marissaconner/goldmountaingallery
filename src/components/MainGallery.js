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
        nextImage = { ...nextImage, artistid: artistArray[i2] };
        console.log(nextImage);
        if (nextImage.src !== undefined) {
          /*Stop sorting through artists that have insufficient images.*/
          imageList.push(nextImage);
        } else {
          artistArray.splice(i2, 1);
        }
      }
    }

    this.state = {
      images: imageList
    };
  }

  render() {
    return (
      <div className="row text-center" id="gmg-artist-gallery">
        <div className="col-md-12">
          {this.state.images.map(image => (
            <div className="gmg-artist-gallery-thumbnail">
              <a href={`/artist/${image.artistid}`}>
                <img
                  className="img-responsive"
                  src={`/img/artists/${image.artistid}/${image.src}`}
                  alt={image.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainGallery;

import React from "react";

const Modal = ({ artistName, galleryItems, activeCarouselIndex }) => (
  <div className="center-center-container">
    <div
      id="gmg-gallery-modal"
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="vh-align-helper">
        <div className="modal-dialog vh-align-center">
          <div
            id="gmg-artist-carousel"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              {galleryItems.map((galleryEntry, index) => (
                <CarouselEntry
                  key={index}
                  artistName={artistName}
                  isActive={index === activeCarouselIndex}
                  {...galleryEntry}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GalleryEntry = ({
  artistName,
  imgname,
  src,
  alt,
  clickHandler,
  index
}) => (
  <div
    className="gmg-artist-gallery-thumbnail"
    data-toggle="modal"
    data-target="#gmg-gallery-modal"
    onClick={() => {
      clickHandler(index);
    }}
  >
    <img
      src={"/img/artists/" + artistName + "/" + src}
      className="img-responsive"
      alt={alt}
      data-opens={"#gallery-" + imgname}
    />
  </div>
);

const CarouselEntry = ({ artistName, imgname, src, alt, isActive }) => (
  <div className={`item ${isActive ? "active" : ""}`}>
    <img
      src={"/img/artists/" + artistName + "/" + src}
      alt={alt}
      id={"gallery-" + imgname}
    />
  </div>
);

const ArtistGallery = ({ artistName, clickHandler, galleryItems }) => (
  <div className="row" id="gmg-artist-gallery">
    <div className="col-xs-12 text-center">
      {galleryItems.map((galleryEntry, index) => (
        <GalleryEntry
          key={index}
          artistName={artistName}
          index={index}
          clickHandler={clickHandler}
          {...galleryEntry}
        />
      ))}
    </div>
  </div>
);

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        activeCarouselIndex: 0
      }
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <div>
        <ArtistGallery
          clickHandler={this.clickHandler}
          galleryItems={this.props.galleryItems}
          artistName={this.props.artistName}
        />
        <Modal
          galleryItems={this.props.galleryItems}
          activeCarouselIndex={this.state.modal.activeCarouselIndex}
          artistName={this.props.artistName}
        />
      </div>
    );
  }

  clickHandler(clickedIndex) {
    this.setState({
      modal: {
        activeCarouselIndex: clickedIndex
      }
    });
  }
}

export default GalleryContainer;

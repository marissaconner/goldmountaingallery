import React from "react";
import GalleryContainer from "./ArtistGallery";
import htmlToReact from "html-react-parser";

const Artist = ({ artistData }) => (
  <article>
    <div className="container-fluid">
      <div className="row">
        <div
          id="gmg-artist-heading"
          style={{
            backgroundImage: `url(${artistData.bannerSrc})`
          }}
        >
          <h1 id="gmg-artist-name">
            {artistData.firstName} {artistData.lastName}
          </h1>
          <span id="gmg-artist-tagline">{artistData.tagline}</span>
        </div>
      </div>
    </div>

    <div className="container">
      <section>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">About {artistData.firstName}</h2>
            <img
              id="gmg-artist-portrait"
              className="col-md-5 col-sm-12 pull-left img-responsive"
              src={artistData.portraitSrc}
              alt={`${artistData.firstName} ${artistData.lastName} portrait`}
            />
            {htmlToReact(artistData.bioText)}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center">Gallery</h2>
        <GalleryContainer
          artistName={`${artistData.firstName}-${artistData.lastName}`}
          galleryItems={artistData.galleryItems}
        />
      </section>
    </div>
  </article>
);

export default Artist;

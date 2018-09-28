import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs.js";
import Testimonial from "./components/Testimonial";
import testimonialData from "./data/testimonial-data";
import artistData from "./data/artist-data";
import MainGallery from "./components/MainGallery";

const ArtistContainer = ({
  match: {
    params: { artistId }
  }
}) => {
  if (!artistData[artistId]) {
    return <NotFound />;
  }
  return <Artist artistData={artistData[artistId]} />;
};
const PickArtist = () => (
  <div className="container text-center">
    <h1>Meet Our Artists</h1>
    {Object.keys(artistData).map(artist => (
      <Link
        to={`/artist/${artist}`}
        className="artist-link"
        style={{ backgroundImage: `url(${artistData[artist].bannerSrc})` }}
      >
        <p className="artist-link-heading">{`${artistData[artist].firstName} ${
          artistData[artist].lastName
        }`}</p>
      </Link>
    ))}
  </div>
);

const ListTestimonials = () => (
  <div className="container">
    <div className="row">
      <h1 className="text-center">Testimonials</h1>
      {testimonialData.map((testimonialEntry, index) => (
        <Testimonial key={index} {...testimonialEntry} />
      ))}
    </div>
  </div>
);

const MainGalleryContainer = () => (
  <div class="container">
    <h2 className="text-center">Beautiful Things</h2>
    <MainGallery artistData={artistData} />
  </div>
);

const App = () => (
  <div id="gmg-app">
    <div className="container">
      <header id="gmg-header">
        <Navbar />
      </header>
    </div>

    <div id="gmg-body">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage
              featuredArtist={{
                _id: "michelle-marocco",
                backgroundImage:
                  "url(img/michelle-marocco-feature-background.jpg)",
                name: "Michelle Marocco",
                galleryHref: "/artist/michelle-marocco"
              }}
            />
          </Route>
          <Route path="/gallery" component={MainGalleryContainer} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/testimonials" component={ListTestimonials} />
          <Route path="/artists" component={PickArtist} />
          <Route path="/artist/:artistId" component={ArtistContainer} />
          <Route path="/about" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
    <footer id="gmg-footer">
      Copyright &copy; Gold Mountain Gallery. All rights reserved.
    </footer>
  </div>
);

export default App;

import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import testimonialData from "./data/testimonial-data";
import artistData from "./data/artist-data";

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
  <div>
    {Object.keys(artistData).map(artist => (
      <Link to={`/artist/${artist}`}>
        {`${artistData[artist].firstName} ${artistData[artist].lastName}`}
      </Link>
    ))}
  </div>
);

const App = () => (
  <div>
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
          <Route exact path="/contact" component={Contact} />
          <Route
            path="/testimonials"
            component={Testimonials}
            testimonialData={testimonialData}
          />
          <Route path="/artists" component={PickArtist} />
          <Route path="/artist/:artistId" component={ArtistContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;

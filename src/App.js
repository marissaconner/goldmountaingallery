import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.js";
import Homepage from "./components/homepage.js";
import NotFound from "./components/notfound.js";
import Artist from "./components/artist.js";
import artistData from "./data/artistdata.js";

const ArtistContainer = ({
  match: {
    params: { artistId }
  }
}) => <Artist artistData={artistData[artistId]} />;

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
          <Route exact path="/" component={Homepage} />
          <Route path="/artists" component={PickArtist} />
          <Route path="/artist/:artistId" component={ArtistContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;

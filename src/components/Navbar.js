import React from "react";

const Navbar = () => (
  <div className="container" id="gmg-header">
    <div id="gmg-masthead">
      <a href="/">
        <img
          src="/img/gold-mountain-gallery.jpg"
          alt="Gold Mountain Gallery"
          className="img-responsive"
        />
      </a>
    </div>
    <div id="gmg-nav-menu">
      <button
        className="navbar-toggle collapsed btn"
        id="gmg-mobile-nav"
        data-toggle="collapse"
        data-target="#gmg-nav-options"
      >
        <span className="icon-bar top-bar" />
        <span className="icon-bar middle-bar" />
        <span className="icon-bar bottom-bar" />
      </button>
      <nav className="navbar" id="gmg-nav">
        <div className="collapse navbar-collapse" id="gmg-nav-options">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a>About</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/artists">Our Artists</a>
                </li>
                <li>
                  <a>Our Mission</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a>Beautiful Things</a>
              <ul className="dropdown-menu">
                <li>
                  <a>Fine Artwork</a>
                </li>
                <li>
                  <a>Jewelry</a>
                </li>
                <li>
                  <a>Lighting</a>
                </li>
                <li>
                  <a>Photography</a>
                </li>
                <li>
                  <a>Woodworking</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Get In Touch</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default Navbar;

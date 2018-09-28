import React from "react";

const Homepage = ({ featuredArtist }) => (
  <div>
    <div className="container-fluid">
      <div
        id="gmg-main-splash"
        className="row"
        style={{ backgroundImage: "url(img/gold-mountain-gallery-splash.jpg)" }}
      >
        <h1 className="display-on-dark">Tailored to your taste.</h1>
        <p className="body-on-dark">
          We bring exclusive craftsmanship and fine artistry to your home.
        </p>
      </div>
    </div>

    <div className="container">
      <div className="row section">
        <div className="col-md-6">
          <img className="img-responsive" src="img/couch.jpg" />
        </div>
        <div className="col-md-6">
          <h1>Custom-Made And White-Glove Delivered</h1>
          <p>
            Think of our gallery as a portfolio of possibilities: we want to
            create a piece that is uniquely you, that makes a statement and has
            a personal story from your experiences collaborating with us.
          </p>
          <p>
            Our furniture, decor and accessories each are one of a kind original
            works made with the height of craftsmanship and artistry, the
            options limited only by your imagination.
          </p>
          <p>
            We do anything &mdash; and we do mean anything. Pool tables, sofa
            sectionals, chandeliers, kitchen utensils, it doesn't matter: we
            just make beautiful things.
          </p>
          <p className="text-center">
            Looking for the perfect piece? Want to learn more?
          </p>
          <a href="/contact" className="btn btn-block btn-gold">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="row section" id="gmg-link-tiles">
        <a style={{ backgroundImage: "url( img/jewelry.jpg )" }}>Jewelry</a>
        <a style={{ backgroundImage: "url( img/artwork.jpg )" }}>Fine Art</a>
        <a style={{ backgroundImage: "url( img/photography.jpg )" }}>
          Photography
        </a>
        <a style={{ backgroundImage: "url( img/lighting.jpg )" }}>Lighting</a>
        <a style={{ backgroundImage: "url( img/woodworking.jpg )" }}>
          Furniture
        </a>
        <a style={{ backgroundImage: "url( img/decor.jpg )" }}>Decor</a>
      </div>

      <div className="row section gmg-infotiles">
        <div className="col-md-3">
          <h3>Call</h3>
          <a href="tel:91458483330">
            <b>Mark:</b> 914 584 8333
          </a>
          <a href="tel:9707081321">
            <b>Scott:</b> 970 708 1321
          </a>
        </div>
        <div className="col-md-3">
          <h3>Location</h3>
          <p>135 West Colorado Ave</p>
          <p>Telluride, CO 18435</p>
        </div>
        <div className="col-md-3">
          <h3>Hours</h3>
          <p>9:00 AM - 5:00 PM</p>
          <p>And Appointments</p>
        </div>
        <div className="col-md-3">
          <h3>Social</h3>
          <a href="https://www.facebook.com/Gold-Mountain-Gallery-286346574824495/">
            Facebook
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;

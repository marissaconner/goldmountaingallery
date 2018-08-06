import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';

class App extends Component { 
  constructor() {
    super()
    this.state = {
      currentPage: 'home',
    }
    this.changePage = this.changePage.bind(this)
  } 

  changePage(currentPage) {
    this.setState({ currentPage })
  }

  render() {
    return (
     
    <div>
      <div className="container">
        <header id="gmg-header">  
          <Navbar />
        </header>
      </div>  
            
    <div id="gmg-body">
    
    
      <div id="gmg-main-splash"  style={{ 'background-image' : 'url(img/gold-mountain-gallery-splash.jpg)' }}>
        <div className="container">
          <h1 className="display-on-dark">Tailored to your taste.</h1>
          <p className="body-on-dark">We bring exclusive craftsmanship and fine artistry to your home.</p>
        </div>
      </div>
      
      <div className="container">
        <div id="gmg-artist-feature">
          <div className="row background-image" id="gmg-artist-feature-inner" style={{ 'background-image' : 'url(img/michelle-marocco-feature-background.jpg)' }}>
            <div className="col-md-6 body-on-dark">
              <p>Featuring</p>
              <p id="gmg-feature-title" class="display-on-dark">Michelle Marocco</p>
              <p>Hand-made jewelry and fine artwork</p>
              <a href="#" className="btn btn-ghost">Gallery</a>
            </div>
          </div>
        </div>
        
          <div className="row" id="gmg-link-tiles">
            <a href="#" style={{ 'background-image' : 'url( img/jewelry.jpg )'}}>
              Jewelry
            </a>
            <a href="#" style={{ 'background-image' : 'url( img/artwork.jpg )'}}>
              Fine Art
            </a>
            <a href="#" style={{ 'background-image' : 'url( img/photography.jpg )'}}>
              Photography
            </a>
            <a href="#" style={{ 'background-image' : 'url( img/lighting.jpg )'}}>
              Lighting
            </a>
            <a href="#" style={{ 'background-image' : 'url( img/woodworking.jpg )'}}>
              Woodworking
            </a>
            
          </div>
          
          <div className="row text-center">
            <div className="col-md-12">
              <h1>Lorem Ipsum</h1>
              <p>
                In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.
              </p>
              <p>
                The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.
              </p>
            </div>
          </div>
          
          <div className="row gmg-infotiles">
            <div className="col-md-3">
              <h3>Call</h3>
              <a href="tel:1234567890">123 456 7890</a>
            </div>
            <div className="col-md-3">
              <h3>Locations</h3>
              <a href="#">Telluride</a>
              <a href="#">Ridgway</a>
            </div>
            <div className="col-md-3">
              <h3>Hours</h3>
              <a href="#">Telluride</a>
              <a href="#">Ridgway</a>
            </div>
            <div className="col-md-3">
              <h3>Social</h3>
              <a href="https://www.facebook.com/Gold-Mountain-Gallery-286346574824495/">Facebook</a>
            </div>
          </div>
        
      </div>
    </div>
    </div>
    );
  }
}

export default App;

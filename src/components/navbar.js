import React from 'react';
import pages from '../data/pages'

const Navbar = ({ changePage }) => 
 
  <div className="container" id="gmg-header">
    <div id="gmg-masthead">
      <a href="#">
        <img src="img/gold-mountain-gallery.jpg" alt="Gold Mountain Gallery" className="img-responsive" />
      </a>
    </div>
    <nav className="navbar" id="gmg-nav" role="navigation">
      <ul>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">About</a>
          <ul className="dropdown-menu">
            <li><a href="#">Our Artists</a></li>
            <li><a href="#">Our Mission</a></li>
          </ul>
        </li>
        
        <li className="dropdown">
          <span className="dropdown-toggle" id="nav-beautifulthings" data-toggle="dropdown">Beautiful Things</span>
          <ul className="dropdown-menu" id="nav-beautifulthings">
            <li><a href="#">Fine Artwork</a></li>
            <li><a href="#">Jewelry</a></li>
             <li><a href="#">Lighting</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Woodworking</a></li>
          </ul>
        </li>
        
        <li>
          <a href="#">Events</a>
        </li>
        
        <li>
          <a href="#">Get In Touch</a>
        </li>
      </ul>
    </nav>
  </div>
   
    
export default Navbar;

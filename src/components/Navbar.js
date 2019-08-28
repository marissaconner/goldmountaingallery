import React from "react";

const Navbar = () => (
  <header className="navbar" role="navigation">
  
    <div className="container d-flex w-100 header navbar__brand">
      <div className="menu-icon-mobile d-md-none navbar__brand__menu-toggle closed open">
        <svg data-src="/img/mobile-menu.svg" width="50px" height="31px"/>
      </div>

      <a href="https://www.goldmountaingallery.com/" className="navbar__logo">
        <img src="/img/gold-mountain-gallery.jpg"/>
      </a>

      <div className="navbar__search">
        <form className="form-inline" id="homepage-search" action="https://www.goldmountaingallery.com/search">
          <input className="form-control w-100" type="text" name="q" placeholder="Search" required />
          <button className="btn btn-search" type="submit">
            <svg data-src="/img/search.svg" width="18" height="18"/>
          </button>
        </form>
      </div>

      <div className="navbar__menu navbar__menu--topmenu">
        <nav className="navigation closed">
          <ul className="menu nav mb-4 mb-md-0">
            <li className="nav-item menu__item">
              <a className="nav-link" href="https://www.goldmountaingallery.com/page/about">About Us</a>
            </li>

            <li className="nav-item menu__item">
              <a className="nav-link" href="#">Contact</a>
            </li>

            <li className="nav-item menu__item">
              <a className="nav-link" href="https://www.goldmountaingallery.com/account/signup">Register</a>
            </li>

            <li className="nav-item menu__item">
              <a className="nav-link" href="https://www.goldmountaingallery.com/account/login">Log In</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="checkout__icon">
        <div className="navbar__brand__checkout__icon" style={{width:62, height:28, position:'relative' }}>
          <a rel="nofollow" href="https://www.goldmountaingallery.com/checkout">
            <svg data-src="/img/checkout.svg" width="62" height="28"/>
          </a>
        </div>
      </div>    

      <div className="navbar__menu navbar__menu--topmenu d-block mb-md-0">
        <nav className="navigation">
            <ul className="menu nav mb-4 mb-md-0">
             <div className="d-md-none">
              <li className="nav-item menu__item">
                <a className="nav-link" href="https://www.goldmountaingallery.com/page/about">About Us</a>
              </li>

              <li className="nav-item menu__item">
                <a className="nav-link" href="#">Contact</a>
              </li>

              <li className="nav-item menu__item">
                <a className="nav-link" href="https://www.goldmountaingallery.com/account/signup">Register</a>
              </li>

              <li className="nav-item menu__item">
                <a className="nav-link" href="https://www.goldmountaingallery.com/account/login">Log In</a>
              </li>
            </div>        
          </ul>
        </nav>
      </div>
    </div>
  </header>

);

export default Navbar;

import React from "react";

const Navbar = () => (
  <header className="navbar" role="navigation">
  
    <div className="d-flex w-100 header navbar__brand">
      <div className="menu-icon-mobile d-md-none navbar__brand__menu-toggle closed open">
        <svg data-src="/img/mobile-menu.svg" width="50px" height="31px"/>
      </div>

      <a href="https://www.goldmountaingallery.com/" className="navbar__logo" style={{paddingLeft:0}}>
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

      <div className='w-100'>
      <nav className='navigation closed'>
        <ul className='navbar__menu'>
          <li className='nav-item menu__item' style={{paddingLeft: 0, marginLeft: 0}}>
            <a className='nav-link'  style={{paddingLeft: 0, marginLeft: 0}} href="https://www.goldmountaingallery/products/category/artwork-16/">Artwork</a>
          </li>
          <li className='nav-item menu__item'>
            <a className='nav-link' href="https://www.goldmountaingallery/products/category/furniture-14/">Furniture</a>
          </li>
          <li className='nav-item menu__item'>
            <a className='nav-link' href="https://www.goldmountaingallery/products/category/jewelry-15/">Jewelry</a>
          </li>
          <li className='nav-item menu__item'>
            <a className='nav-link' href="https://www.goldmountaingallery/products/category/lighting-11/">Lighting</a>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  </header>

);

export default Navbar;

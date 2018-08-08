import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import PageContent from './components/pagecontent.js'

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
          <Navbar changePage={this.changePage} />
        </header>
      </div>  
            
      <div id="gmg-body">
        <PageContent currentPage={this.state.currentPage} />
      </div>
    </div>
    );
  }
}

export default App;

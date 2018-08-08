import React from 'react'

import Homepage from './homepage.js' 
import Artist from './artist.js'
import artistdata from '../data/artistdata.js';

const PageContent = ({ currentPage }) => {
  switch(currentPage) {
    case 'Artist':
      return <Artist artistData={artistdata} />
//  case 'About':
//    return <About />
//  case 'Contact':
//    return <Contact />
    default:
      return <Homepage />
  }
}

export default PageContent
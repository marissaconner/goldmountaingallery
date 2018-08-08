import React from 'react'

import Homepage from './homepage.js' 
import Artist from './artist.js'

const PageContent = ({ currentPage }) => {
  switch(currentPage) {
    case 'Artist':
      return <Artist />
//  case 'About':
//    return <About />
//  case 'Contact':
//    return <Contact />
    default:
      return <Homepage />
  }
}

export default PageContent
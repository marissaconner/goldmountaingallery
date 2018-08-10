import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {render } from 'react-dom';

import Homepage from './homepage.js' 
import Artist from './artist.js'
import artistdata from '../data/artistdata.js';

const PageContent = () => {
  <BrowserRouter>
    <Switch>
      <Route component = {Homepage} />
    </Switch>
  </BrowserRouter>
  
}

export default PageContent
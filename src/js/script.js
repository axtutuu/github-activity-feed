import React from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';

// pages
import LayoutEl from './components/els/LayoutEl.jsx';
import IndexView from './components/views/IndexView.jsx';

render((
  <Router history={hashHistory}>
    <Route path='/' component={LayoutEl}>
      <IndexRoute component={IndexView} />
    </Route>
  </Router>), document.querySelector('#app')
)

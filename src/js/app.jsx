import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

// pages
import LayoutEl from './components/els/LayoutEl.jsx';
import IndexView from './components/views/IndexView.jsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={LayoutEl}>
      <IndexRoute component={IndexView} />
    </Route>
  </Router>,
app);



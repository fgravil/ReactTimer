﻿var React = require('react');
var ReactDOM = require('react-dom');

{/*ES5 desctructuring syntax */}
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//Load foundations-sites
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    
    </Route>
  </Router>,
    document.getElementById('app')
);

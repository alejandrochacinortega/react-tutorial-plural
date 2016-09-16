var React = require('react');
$ = jQuery = require('jquery');
var Header  = require('./commons/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
      </div>
    )
  }
});

module.exports = App;
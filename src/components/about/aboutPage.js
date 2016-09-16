var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo(transition, params, query, callback) {
      if(!confirm('Are you sure you want to read this boring page?')) {
        transition.about()
      }
      else {
        callback()
      }
    },
    willTransitionFrom(transition, component) {
      if(!confirm('Are you sure you want to leave this exciting page?')) {
        transition.about()
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>This app uses the followeing technologies</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    )
  }
});

module.exports = About;
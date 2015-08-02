var React = require('react');
var Router = require('director').Router;
var Palettes = require('./Palettes.react');

var App = React.createClass({
  getInitialState: function() {
    return {
      palettes: []
    }
  },

  componentDidMount: function() {
    this._getJSON('palettes.json', this._updatePalettes);
    this._initRouter();
  },

  render: function() {
    return (
      <div>
      <Palettes palettes={this.state.palettes} />
      </div>
    )
  },

  var showPalette = function() {
    
  },

  var showAll = function() {
    return (
      <div>
      <Palettes palettes={this.state.palettes} />
      </div>
    )
  },

  _getJSON: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  _updatePalettes: function(e) {
    var updatedPalettes = this.state.palettes;
    this.state.palettes.push(JSON.parse(e.target.responseText));
    this.setState({palettes: updatedPalettes});
  },

  _initRouter: function() {
      this.router = Router({
        '/'             : showAll,
        '/palettes/:id' : showPalette
      });
      this.router.configure({ html5history: true });
      this.router.init();
  }

});

module.exports = App;

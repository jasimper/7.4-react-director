var React = require('react');

var Palette = React.createClass({
  render: function() {
    var tempTitle = this._listPalettes();
    return (
      <div>
      {tempTitle}
      </div>
    );
  },

  _listPalettes: function() {
    var self = this;
    var allPalettes = self.props.palette;

    return allPalettes.map(function(item) {
      return (
        <div className='palette' data-js={item.id}>
          <a href={'/palettes/' + item.id}>
            <h3>{item.title}</h3>
          </a>
          <p>{item.category}</p>
          <div className='colorContainer'>
          {self._listPaletteColors(item)}
          </div>
        </div>
      );
    })
  },

  _listPaletteColors: function(p) {
    var colourKeys = Object.getOwnPropertyNames(p.colours);
    var paletteColours = colourKeys.map(function(colKey, i) {
      return (
        <div className='color' key={p.id + colKey} style={{backgroundColor: p.colours[colKey]}}>
          <div className='hex' style={{color: p.colours[colKey]}} >{p.colours[colKey]}</div>
        </div>
      )
    });
    return (
      paletteColours
    )
  },

});

module.exports = Palette;

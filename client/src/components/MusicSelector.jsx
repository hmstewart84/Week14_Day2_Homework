var React = require('react');

var MusicSelector = React.createClass({

  handleChange: function(event) {
    var newIndex = event.target.value;
    console.log(newIndex);
    this.props.selectGenre(newIndex);
  },

  render: function(){

    var options = this.props.genres.map(function(genre, index) {
      return <option key={index} value={index}>{genre.name}</option>
    })
    
    return(
      <select id="genres" onChange={this.handleChange}>
      {options}
      </select>
    )
  }
})

module.exports = MusicSelector;

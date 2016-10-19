var React = require('react');
var MusicSelector = require('./MusicSelector');
var MusicDetail = require('./MusicDetail');

var MusicBox = React.createClass({
  getInitialState:function(){
    return { genres: [], focusGenre: null }
  },

  componentDidMount: function() {
    var url = "https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=34";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      this.setState({ genres:data, focusGenre:data[0] });
    }.bind(this);
    request.send();
  },

  setFocusGenre: function(index) {
    var newGenre = this.state.genres[index];
    this.setState({ focusGenre: newGenre });
  },

  render:function(){
    return(
      <div>
        <h2>Music Box</h2>
        <MusicSelector genres={this.state.genres} selectMusic={this.setFocusGenre}></MusicSelector>
        <MusicDetail genre={this.state.focusGenre}></MusicDetail>
      </div>
    )
  }
})


module.exports = MusicBox;
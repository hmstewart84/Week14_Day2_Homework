var React = require('react');
var ReactDOM = require('react-dom');

var MusicBox = require('./components/MusicBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <MusicBox></MusicBox>,
    document.getElementById('app')
  );
}

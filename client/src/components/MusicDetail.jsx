var React = require('react');

var MusicDetail = function(props) {
  if (!props.genre) return <h3>No genre selected</h3>

  return(
        <div>

        <h3>{props.genre}</h3>
        

        </div>
      )
}


module.exports = MusicDetail;


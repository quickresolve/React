var React = require('react');
var styles = require(../styles);

function MainContainer (props) {
  return(
    <div className='jumbotron col-sm-12 text-center' style={transparentBG}>
      {props.children}
    </div>
  )
}

modules.exports = MainContainer;
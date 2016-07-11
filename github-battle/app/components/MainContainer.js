var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var styles = require(../styles);

function MainContainer (props) {
  return(
    <div className='jumbotron col-sm-12 text-center' style={transparentBG}>
      <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  )
}

modules.exports = MainContainer;
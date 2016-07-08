// var app = document.getElementById('app');
// app.innerHTML = 'Hello!'

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    console.log(this.props)
    return(
      <div> Hello React JS Program! </div>
      )
  }
});

ReactDOM.render(
  <HelloWorld name="Jane Doe" anySortOfData={29} />,
  document.getElementById('app')
  )

// Pure Functions:
// Evaluates the same results given the same arguments
// Doesn't depend on and doesn't modify the state of variables out of it's scope.
// No side effects (mutations, async requests)
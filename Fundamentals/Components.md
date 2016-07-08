#Components Notes

To create a React component, use the createClass method on the React object, passing createClass a description of the component.

ex:

var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
      )
    }
  });

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

-Render is the template for our component.

-ReactDOM.render takes in two arguments. The first argument is the component you want to render, the second argument is the DOM node where you want to render the component.

-If you want your whole app to be React, you would render the component to document.body.

-Writing JSX allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects. React is then able to take these JavaScript objects and from them form a “virtual DOM” or a JavaScript representation of the actual DOM.

-this is what your JSX is transformed to once Webpack runs its transformation process:

var HelloWorld = React.createClass({
  displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});


##Updating the DOM

Signal to notify our app some data has changed→ Re-render virtual DOM -> Diff previous virtual DOM with new virtual DOM -> Only update real DOM with necessary changes.

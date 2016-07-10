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

##Quiz Notes

-You make a new React Component by calling React.createClass()

-The method for rending a react component to the DOM is ReactDOM.render()

-The ReactDOM.render() method takes two arguments
  *First is the class you want to render
  *Second is place you want it to render to (which element to inject it in)

-Webpack loaders allow you to preprocess files as you require() or "load" them


##Nested Components

Props are to components what arguments are to functions - used to pass down data to those child React components.
  *calling this.props.attribute_name will allow you access to the attribute from a parent component


-Using the map function on list items:
  map creates a new array, calls our callback function on each item in the array, and fills the new array with the result of calling the callback function on each item.


##Building UIs w/Pure Functions and Function Composition

When you create new react components instead of your function taking in some arguments and returning a value, your function is going to take in some arguments and return some UI.

                      f(d)=V
A Function takes in some Data and returns a View.

Pure functions are consistent and predictable because they have the following characteristics:

- Pure functions always return the same result given the same arguments.
- Pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.


ex: slice vs splice

  -Slice is a pure function because given the same arguments, it will always return the same value. Slice makes a copy of the original array and only modifies the copy.

  -Splice is not a pure function because it modifies state and so will return a different value even when given the same arguments.


##FIRST - Acronym to Test React Components Against

F - Focused
I - Idependent
R - Reusable
S - Small
T - Testable


##Quiz Notes

Characteristics of pure functions include:
-Doesn't depend on variables outside of its scope
-Doesn't modify variables outside of its scope
-Doesn't make AJAX requests
-Doesn't manipulate the DOM
-Can contain other function invocations


You should treat props to a component as immutable.

##this.props.children

In React, use this.props.children to access anything between opening and closing elements.

this.props.children could return a single component if there is only one or an array of components if there are multiple.


##Stateless Functional Components

Stateless functional components that simply take in some data via props and output some UI.


Seperate your components into container components and presentational components. Presentational components optionally take in some data and render a view.

ex:
function HelloWorld(props) {
  return(
    <div>Hello {props.name}</div>
  )
}
ReactDOM.render(<HelloWorld name='Jane'/>, document.getElementById('app'))


-Stateless functional components do not support shouldComponentUpdate()


##PropTypes

Used to validate the type of props that are passed to components.

ex:
var React = require('react')
var PropTypes = React.PropTypes
var Icon = React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
  },
  render: ...
});

If the size property comes in as a string rather than an integer, we're going to get an error in the console.

note: To use PropTypes with functions the API is propTypes.func rather than propTypes.function. Also to use booleans, the API is propTypes.bool not propTypes.boolean.




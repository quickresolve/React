#Notes on React.js Fundamentals

##Imperative code
You tell the computer how to do something

var numbers = [4,2,3,6]
var total = 0
for (var i =0; i < numbers.length; i++){
  total += numbers[i]
}

##Declarative code
You tell the computer what sfdyou want it to do.

var numbers = [4,2,3,6]
numbers.reduce(function(previous, current) {
  return previous + current
})

Using declarative code is more readable, has less bugs, reduces side effects, and minimizes mutability.

##State
Only gets used if component has internal value that is affected.

React has explicit mutations using this.setState method.

this.state === null; (by default)


##Props
Used to pass values or object between components.

this.props

##Event Handling

-onChange
-onClick
-onBlur


##React Router
allows you to map components to be active when you are at different URLs.

<Router history={hashHistory}>
  <Route path = '/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='playerOne' header='Player One' component={PromptContainer} />
    <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
    <Route path='battle' component={ConfirmBattleContainer} />
    <Route path='results' component={ResultsContainer} />
  </Route>
</Router>

##WebPack
Webpack bundles all of your code into one file for you. Then runs it through loaders that transform it and outputs it based on your instructions.

##Babel
 Converts JSX into JS - code transformation.

##Axios
Allows you to make HTTP requests using promises.

##Quiz 1

-React is not technically declarative.
-React Components can be composed just like functions can be composed.
-React is not strictly typed.
-Webpack has become the most popular tool in the React Community.


##Modules
Modules allow us to avoid namespace pollution by creating a private space for our variables.

The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object 


**Notes to Self
 Things to look into:
 context, higher order components, decorators & react utils

 Change or update to a large number of nodes is optimized using batching and change detection techniques.

 Main paradigm of React is to create components and pass props down to components - does not work well with router, so context is useful here.


 ##This Keyword


Consider, where is this function invoked?

4 rules for this keyword:

-Implicit Binding

  Most common rule. The this keyword references what is directly left of the dot at call time.

ex:
var me = {
  name: Jane,
  age: 25,
  sayName: function(){
    console.log(this.name);
  }
}

me.sayName();


-Explicit Binding

Explicitly state what the this keyword is with .call(argument) invocation. Use .call, .apply, or .bind.

Using .call or .apply immediately invokes the function.

ex:
var sayName = function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', & ' + lang3 + '.');
};

var stacey = {
  name: 'Stacey',
  age: 25
};

var languages = ['ruby', 'javascript', 'python'];

sayName.call(stacey, languages[0], languages[1], languages[2]);

vs sayName.apply(stacey, languages);
*Using .apply will parse the languages array for us.

Using .bind returns a new function instead of invoking the original function.


-new Binding

When the new keyword is called JS creates a new object for us and saves it as this = {}.

ex:
var Animal = function(color, name, type){
  this.color = color;
  this.name = name;
  this.type = type;
}

var Zebra = new Animal('black & white', 'Zorro', 'zebra');


-Window Binding

If you call a function that uses the this keyword but you do not explicitly bind it or pass it an argument then the this will default to the main window object and will return undefined.

If you call 'use strict'; this case will return an error instead of just undefined.

ex:
var sayAge = function() {
  console.log(this.age);
};

var me = {
  age: 25
}

sayAge();


##Reduce
Often in programming you'll need to take a list of things and convert that into just one item - whether an integer, an object, or another array.

.reduce takes in two values, a callback function and an initial value.

If you want the end result to be an object (therefore converting an array into an object), have the initialValue be an object and add properties to that object as you go.

ex:
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var initialValue = {}
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducer, initialValue) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}

Here's an example of how you would do that below. You have an array of foods and you want to transform that to an object whose keys are the food itself and whose values are how many votes that food received.

##getDefaultProps

 getDefaultProps allows you to, as you guessed, specify what the default props will be in a component if those specific props aren't specified when the component is invoked.

 ##React.cloneElement

 There are times when you'll need to clone a React element and attach new props to it.
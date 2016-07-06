##Notes on React.js Fundamentals

#Imperative code
You tell the computer how to do something

var numbers = [4,2,3,6]
var total = 0
for (var i =0; i < numbers.length; i++){
  total += numbers[i]
}

#Declarative code
You tell the computer what you want it to do.

var numbers = [4,2,3,6]
numbers.reduce(function(previous, current) {
  return previous + current
})

Using declarative code is more readable, has less bugs, reduces side effects, and minimizes mutability.

React has explicit mutations using this.setState



#React Router
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

#WebPack
Webpack bundles all of your code into one file for you. Then runs it through loaders that transform it and outputs it based on your instructions.

#Babel
 Converts JSX into JS - code transformation.

#Axios
Allows you to make HTTP requests using promises.

#Quiz 1

-React is not technically declarative.
-React Components can be composed just like functions can be composed.
-React is not strictly typed.
-Webpack has become the most popular tool in the React Community.
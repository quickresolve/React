#Life Cycle Events

Lifecycle methods are special methods each component can have that allow us to hook into the views when specific conditions happen (i.e. when the component first renders or when the component gets updated with new data, etc).


You can really break React's Life Cycle Methods down into two categories.

1) When a component gets mounted to the DOM and unmounted.
2) When a component receives new data.


##Mounting & Unmounting

Use cases:
-Establish some default props in our component

ex:
var Loading = React.createClass({
  getDefaultProps: function () {
    return {
      text: 'Loading'
    }
  },
  render: function () {
    ...
  }
})

-Set some initial state in our component
ex:
var Login = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },
  render: function () {
    ...
  }
})

-Make an Ajax request to fetch some data needed for this component (componentDidMount)

ex:
var FriendsList = React.createClass({
  componentDidMount: function () {
    return Axios.get(this.props.url).then(this.props.callback)
  },
  render: function () {
    ...
  }
})

-Set up any listeners (ie Websockets or Firebase listeners)

ex:
var FriendsList = React.createClass({
  componentDidMount: function () {
    ref.on('value', function (snapshot) {
      this.setState({
        friends: snapshot.val()
      })
    })
  },
  render: function () {
    ...
  }
})

-Remove any listeners you initially set up (when unmounted)

ex:
var FriendsList = React.createClass({
  componentWillUnmount: function () {
    ref.off()
  },
  render: function () {
    ...
  }
})




##componentWillReceiveProps
There will be times that you'll want to execute some code whenever your component receives new props.

##shouldComponentUpdate
shouldComponentUpdate returns a boolean, if that boolean is true, that component will re-render. If it's false, that component (and naturally all child components), won't re-render. This can be a huge performance gain if you know exactly when you want to re-render (based on either the state or the props of your components).



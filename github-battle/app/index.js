// var app = document.getElementById('app');
// app.innerHTML = 'Hello!'

var USERDATA = {
  name: 'Jane Doe',
  username: 'JaneDoe',
  image: 'http://irishdeaths.com/wp-content/uploads/2014/03/Jane-Doe-3-800x450.jpg'
}


var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function(){
//     // console.log(this.props)
//     return(
//       <div> Hello {this.props.name}! </div>
//       )
//   }
// });

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return(
      <div>
        <a href={'https://www.github.com' + this.props.username} >
          {this.props.username}
        </a>
      </div>
      )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return(
        <div>{this.props.name}</div>
      )
  }
});

var Avatar = React.createClass({
  render: function(){
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
      )
  }
})

ReactDOM.render(
  // <HelloWorld name="Jane Doe" anySortOfData={29} />,
  <Avatar user={USERDATA} />,
  document.getElementById('app')
  )

// Pure Functions:
// Evaluates the same results given the same arguments
// Doesn't depend on and doesn't modify the state of variables out of it's scope.
// No side effects (mutations, async requests)
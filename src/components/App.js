import React, { Component } from 'react';

class App extends Component {

  render() {
    return <div> This is a react app, root component </div>
  }
}

export default App;

/**

 Another alternative to doing the same thing would have been

 var App = React.createClass({
  render() {
    return <your awesome element here>
  }
});

then export this App.
Also importing just "React" would have been sufficient
*/

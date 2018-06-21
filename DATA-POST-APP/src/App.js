import React, { Component } from 'react';
import Post from './PostForm';
import All from './AllPost';


class App extends Component {
  render() {
    return (
    <div className="App">
        <Post />
        <All />
    </div>
    );
    }
  }
export default App;

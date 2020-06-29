import React, { Component } from 'react';
import './App.css';

//Import components to be used on this page
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Face Recognition Brain</h1>
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
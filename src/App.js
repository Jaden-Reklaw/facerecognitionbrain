import React, { Component } from 'react';
import './App.css';

//Import components to be used on this page
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }, color: {
      value: '#19109d'
    },
  }
}

class App extends Component {
  state = {
    input: '',
  }

  handleInput = (event) => {
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles 
          params={particlesOptions}
          className="particles"
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        {/*
        <FaceRecognition /> 
        */}
        <footer>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </footer>
      </div>
    );
  }
}

export default App;
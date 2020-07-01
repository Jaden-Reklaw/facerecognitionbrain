import React, { Component } from 'react';
import './App.css';

//Import components to be used on this page
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
//NPM Packages
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

//Get app running to connect to clarifai api
const app = new Clarifai.App({
  apiKey: 'Your API KEY HERE'
 });

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
    imageUrl: '',
    box: {

    },
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log('box is', box);
  }

  handleInput = (event) => {
    this.setState({input: event.target.value});
  }

  handleSubmit = (event) => {
    this.setState({imageUrl: this.state.input})
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error));
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
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        /> 
       
        <footer>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </footer>
      </div>
    );
  }
}

export default App;
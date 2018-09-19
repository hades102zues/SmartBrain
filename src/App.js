import React, { Component } from 'react';
import './App.css';
//components
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js';
import FaceDetection from './components/FaceDetection/FaceDetection';

//dependencies
import Particles from 'react-particles-js'
import Clarifai from 'clarifai';


//parameters for the particle bg
const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

//iniitalizing api key
const app = new Clarifai.App({
 apiKey: '2c2c12b0414a49d883e8388eeb6b5b02'
});


class App extends Component {
  
  constructor(){
    super();
    this.state={
      input:'', //what the user over time
      imageUrl:'' //final capture of user input at time of submit
    }
  }
/*----event handlers*/

//captures what was enetered by user
onInputChange = (event) =>{

   this.setState({ input: event.target.value});

}

/*upon clicking the detect button the data is sent to 
Clarifai and the image on the page is displayed */
onButtonSubmit = ()=>{

    console.log('on click',this.state.input);

    this.setState( {imageUrl:this.state.input} );

   
  app.models.predict( Clarifai.FACE_DETECT_MODEL,
                      this.state.input
                    )
  .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          alert('something went wrong');
        }
  );
}





  render() {
    return (
      <div>
        <Particles params={particlesOptions} 
        className='particle-bg'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
           onInputChange={this.onInputChange} 
           onButtonSubmit={this.onButtonSubmit}
        />
        <FaceDetection imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import axios from "axios";
import Alldogs from "./components/all-dogs/Alldogs"
import Randomdog from "./components/random-dog/Randomdog"
import Dogdisplay from "./components/dog-display/Dogdisplay"

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      selectedDog: undefined,
      randomLeft: undefined,
      randomRight: undefined,
      dogName: undefined,
      hidden: true, 

    }

this.handleChange = this.handleChange.bind(this);
  }


componentDidMount(){
  axios.get("http://localhost:3000/api/dogs").then(response => {
    this.setState({dogNames: Object.keys(response.data.message) })
     
  });
}

handleChange(event) {
  this.setState({selectedDog: event.target.value});
}




  render() {
  console.log(this.state.selectedDog, this.state)
    return (
  <div className="App">
        <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1 className="App-title">Your pawfect pet</h1>
                 <Moment format="MM/DD/YYYY">{this.props.dateToFormat}</Moment>   
         </header>
     <div className="App-intro">
           <h2>
               We strive to help you find the Pawfect Match with your Pawfect Pet.
          </h2>
     </div>
         <Alldogs dogNames = {this.state.dogNames} handleChange = {this.handleChange}/>
         <Dogdisplay selectedDog = {this.state.selectedDog} />
         {
       this.state.hidden ? "" : "Hey, how are you?"
     }
  </div>
   
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import axios from "axios";
import Alldogs from "./components/all-dogs/Alldogs"
import Dogdisplay from "./components/dog-display/Dogdisplay"

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      selectedDog: undefined,
      dogNames: undefined,
      hidden: true,
      dogArr: [],

    }

this.handleChange = this.handleChange.bind(this);
  }


componentWillMount(){
  axios.get("http://localhost:3000/api/dogs").then(response => {
    this.setState({dogNames: Object.keys(response.data.message) })
  });
}

handleChange(event) {
  this.setState({ hidden: false});
  axios.get(`http://localhost:3000/api/dogs/${event.target.value}`).then(res => {
    this.setState({dogArr: res.data})
})
}


  render() {
  console.log(this.state)
    return (
  <div className="App">
        <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1 className="App-title">Your pawfect pet</h1>
                 <Moment format="MM/DD/YYYY">{this.props.dateToFormat}</Moment>   
         </header>
     <div className="App-intro">
           <h2>
               We're here to find your Pawfect pet
          </h2>
          <Alldogs dogNames={this.state.dogNames} handleChange = {this.handleChange}/>
          { this.state.hidden ? "" : 
          <Dogdisplay selected={this.state.selectedDog} dogArr={this.state.dogArr}/>
          }
         
     </div>
       
        
     </div>
   
    );
  }
}

export default App;

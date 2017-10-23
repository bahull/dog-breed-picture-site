import React, { Component } from 'react';
import './Randomdog.css';
import axios from "axios"


class Randomdog extends Component {
        constructor(props){
            super(props)

            this.state = {
                randoDog: undefined,
            }
        }
        componentDidMount(){
        axios.get("/api/breeds/image/random").then(response => {
            this.setState({randoDog: response.message})
        })
    }
    

    render() {
        console.log(this.state.randoDog)
        return (
            <div>
            <img src={this.state.randoDog} alt="Random Dog" height="100px" width="100px" />
            </div>
        );
    }
}

export default Randomdog;
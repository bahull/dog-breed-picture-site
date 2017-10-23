import React, { Component } from 'react';
import axios from 'axios';
import './Dogdisplay.css'

class Dogdisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
        dogObj: [],

        }
    }

    componentWillReceiveProps(props){
         axios.get(`http://localhost:3000/api/dogs/${this.props.selectedDog}`).then(res => {
                            this.setState({dogObj: res.data})
                         })
                }
    render() {
        let count = 0;
        console.log(this.state.dogObj[0])
        return (
            <div className="img-background">
                <img className= "Main-img" src={this.state.dogObj[count]} alt="Dogs"></img>         
            </div>
                );
            }
}

export default Dogdisplay;
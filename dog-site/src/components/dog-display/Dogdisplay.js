import React, { Component } from 'react';
import axios from 'axios';
import './Dogdisplay.css';

class Dogdisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
        count: 0,
        }
        this.nextPic = this.nextPic.bind(this);

    }



   
    nextPic(event){
        let nextCount = this.state.count + 1
        nextCount = nextCount < this.props.dogArr.length ? nextCount: 0

        this.setState({count: nextCount, in: true});
        


    }

    render() {
        console.log(this.props.dogArr)
        return (
           <div className="img-background">
               
                <img className= "Main-img" src={this.props.dogArr[this.state.count]}></img> 
                <button className="btn btn-info" onClick={() => this.nextPic() }>Next</button>
                  
        </div> 
                );
            }
}

export default Dogdisplay;
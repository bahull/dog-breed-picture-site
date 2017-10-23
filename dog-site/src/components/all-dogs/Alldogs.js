import React, { Component } from 'react';
import './Alldogs.css'

class Alldogs extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
   

    render() {
     const { dogNames } = this.props
        return (
            <div>
                <select className = "dogNames" onChange={this.props.handleChange}>
                    { dogNames &&  dogNames.map(val => {
                     return   <option key= {val}> {val} </option>
                    })}
                    </select>
            </div>
        );
    }
}

export default Alldogs;
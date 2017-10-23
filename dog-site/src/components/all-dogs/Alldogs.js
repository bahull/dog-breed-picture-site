import React, { Component } from 'react';
import './Alldogs.css'

class Alldogs extends Component {
    constructor(props){
        super(props)
        this.state = {
            word: "Breed"
    }
}
   

    render() {
     const { dogNames } = this.props
        return (
            <div>
                <select className="form-control dogNames" onChange={this.props.handleChange}>

                    <option value="" disabled selected>Select a Breed</option>

                    { dogNames &&  dogNames.map(val => {
                     return   <option key= {val}> {val} </option>
                    })}
                    </select>
            </div>
        );
    }
}

export default Alldogs;
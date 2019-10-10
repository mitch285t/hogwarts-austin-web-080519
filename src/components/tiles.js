import React, { Component } from 'react'  
import HogsIndex from './HogsIndex.js'
import { hostname } from 'os'

class Tiles extends Component {
    constructor() {
    super() 
    this.state = {
        hiddenValue: false 
       
    }    
    }
   
    sluggify = (name) => {
      let slug = name.split(" ")
       return slug.join("_")
    } 
    falseToTrue = () => {
        this.setState({
         hiddenValue: !this.state.hiddenValue
        
        })
    }

  
    render() {
        return (
            <div>
            <div className="ui eight wide column" onClick={this.falseToTrue} >
                <h1>{this.props.hog.name}</h1>
                <img src={require(`../hog-imgs/${this.sluggify(this.props.hog.name.toLowerCase())}.jpg`)} />
            </div>
            { this.state.hiddenValue &&
            <div className="hog details">
                
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.weight}</p>


            </div>}
            </div>
        )
    }
    
}
export default Tiles;
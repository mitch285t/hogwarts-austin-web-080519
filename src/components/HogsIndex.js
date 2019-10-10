import React, { Component } from 'react'  
import Tiles from './tiles.js'
class HogsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hogs: this.props.hogs
        }
    
    }
    iteratehogs = () => {
        return this.props.hogs.map((hog) => < Tiles hog={hog} />
        
        )}

    
    render() {
        return (
            <div className="ui grid container">
                {this.iteratehogs()}
                
            </div>
            
        )
    }
}







export default HogsIndex;
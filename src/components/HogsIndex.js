import React, { Component } from 'react'  
import Tiles from './tiles.js'
import Filter from './filter.js'
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
           <div>
               <Filter hogs={this.props.hogs} />
           
            <div className="ui grid container">
                {this.iteratehogs()}
                
            </div>
            </div> 
        )
    }
}







export default HogsIndex;
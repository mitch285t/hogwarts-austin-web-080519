import React, { Component } from 'react'  
import Tiles from './tiles.js'
import Filter from './filter.js'
class HogsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hogs: this.props.hogs,
            filter: 'All'
        }
    
    }
    iteratehogs = () => {

            return   this.props.hogs.map((hog) => {
             if (this.state.filter === "Greased" && hog.greased) {
                 return < Tiles hog={hog} />
        }   else if (this.state.filter ==="unGreased" && !hog.greased ) {
                return <Tiles hog={hog} />
        }   else if (this.state.filter === "All") {
                return <Tiles hog={hog} />
        }
    }
        )}
    onFilterChange = (selectoption) => {
        this.setState({
            filter: selectoption
        })

    }

    
    render() {
        return (
           <div>
               <Filter hogs={this.props.hogs} onFilterChange={this.onFilterChange} />
           
            <div className="ui grid container">
                {this.iteratehogs()}
                
            </div>
            </div> 
        )
    }
}







export default HogsIndex;
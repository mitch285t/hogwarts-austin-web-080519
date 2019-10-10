import React, { Component } from 'react'  
import HogsIndex from './HogsIndex.js'


class Filter extends Component {


    handleChange = (event) => {
        
        this.props.onFilterChange(event.target.value)
       
    }
   
    
    


    render() {
        return (
            
<form>
<div>

                

<select name="Filter" onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Greased">Greased</option>
                        <option value="unGreased">unGreased</option>
                    </select>
                </div>
                <input type="submit" ></input>


                </form>
                    
           

        
            
        )
    }
}
export default Filter;
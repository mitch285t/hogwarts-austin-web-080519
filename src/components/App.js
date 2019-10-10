import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsIndex from './HogsIndex.js'
class App extends Component {
  
  state = {hogs}

 

  render() {

    return (
      
      <div className="App">
       
          < Nav />
         < HogsIndex hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;

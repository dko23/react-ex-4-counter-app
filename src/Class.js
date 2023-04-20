import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 0 }
    }
    
   up=()=> {
      this.setState({count:this.state.count+1})
    }
  
    down=()=> {
      this.setState({count:this.state.count-1})
    }
  
  
  
  
    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
        
          <button onClick={this.up}>Increase</button>
          <button onClick={this.down}>Decrease</button>
          
        
        </div>
      )
    }
  }
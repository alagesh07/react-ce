import React, { Component } from 'react'

export default class LifeCycle extends Component{

  constructor(props)
  {
        super(props);
        this.state={favColor:"yellow"}
  }
  componentDidMount()
  {
    setTimeout(()=>{this.setState({favColor:"blue"})},5000)
  }

  
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    document.getElementById("id1").innerHTML="Previous value "+prevState.favColor;
}

  render(){
      return (
      <div>
        <h1>My favorite color is {this.state.favColor}</h1>
        <p id="id1"></p>
      </div>

)
  }
}

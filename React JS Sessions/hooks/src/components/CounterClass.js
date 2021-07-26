import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';

class CounterClass extends Component {

  constructor(props){
    super(props);
    this.state = {
      count:0,
      isOn : false
    }
    console.log(this.props);
  }


  

  // componentDidMount(){
  //   document.title = this.state.isOn;
  // }

  // componentDidUpdate(){
  //   document.title = this.state.isOn;
  // }

  componentWillUnmount(){ 
    console.log("Hiii!");
    alert("Do you want to save this code?");
  }


  handleClick = () => {
    this.setState((prevState) => ({
      count : prevState.count + 1,
      isOn : !prevState.isOn
    }));
    console.log("tirth!");
    this.props.history.push('/hooks');
    
  }



  render() {
    const {count, isOn} = this.state;
    return (
      <div>
        <h1>{isOn ? "ON" : "OFF"}</h1>
        <h1>I was clicked {count} times</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default withRouter(CounterClass);

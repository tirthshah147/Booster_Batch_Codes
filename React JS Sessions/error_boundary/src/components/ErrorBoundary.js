import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError : false
    }
  }

  componentDidCatch(error,info){
    this.setState({hasError : true});
    console.log(error);
  }

  render() {
    if(this.state.hasError){
      return <h1>Oooooopsssss. Error aa gaya.</h1>
    }
    return this.props.children;
  }
}

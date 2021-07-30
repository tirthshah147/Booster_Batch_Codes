
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
  }

  // static getDerivedStateFromError(error){
  //   return {hasError : true}
  // }

  render() {
    if (this.state.hasError) {
      return <h1>Oooopsssss....There is some Error</h1>
    }
    return this.props.children
  }
}

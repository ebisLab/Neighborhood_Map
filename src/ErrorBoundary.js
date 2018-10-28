//Component based on the ErrorBoundary example code in the 
//React documentation:https://reactjs.org/docs/error-boundary

//import { Component } from 'react';

//import { push as Menu } from 'react-burger-menu'




import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorInfo: null };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true, errorInfo: info });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Google Maps API has failed. Please check your connection and try again.</h1>;
      }
      return this.props.children;
    }
  }
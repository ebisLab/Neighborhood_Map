import React, { Component } from 'react';

//import { push as Menu } from 'react-burger-menu'




class ErrorBoundary extends Component {

	constructor(props){
		super(props);
		this.state ={ hasError: false, error: null, errorInfo: null};
	}

	componentDidCatch(error, info) {

		//Display fallback UI
		this.setState({hasError: true, error: error, errorInfo: info});

	}

	render() {
		if (this.state.hasError) {
			return(
				<div>
				<h1>Oops, something went wrong:</h1>
				<p>The error: {this.state.error.toString()}</p>
				<p>Where it occured: {this.state.info.componentStack}</p>
				</div>

				);

			
		}
		return this.props.children;
	}
} 

export default ErrorBoundary;
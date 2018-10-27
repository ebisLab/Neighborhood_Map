//Component based on the ErrorBoundary example code in the 
//React documentation:https://reactjs.org/docs/error-boundary

import { Component } from 'react';

//import { push as Menu } from 'react-burger-menu'




class ErrorBoundary extends Component {

	constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error) {
        // Display fallback UI
        this.setState({hasError: true})
        this.props.handleError(
            error,
            `Google Maps failed to load.
            See the JavaScript console for details.`)
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children
        } else {
            return null
        }
    }
} 

export default ErrorBoundary;
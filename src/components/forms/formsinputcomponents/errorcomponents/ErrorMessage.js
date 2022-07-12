import React, { Component } from 'react';

class ErrorMessage extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="error">
                {this.props.message}
            </span>
        );
    }
}

export default ErrorMessage;
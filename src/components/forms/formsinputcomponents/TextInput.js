import React, { Component } from 'react';
import ErrorMessage from './errorcomponents/ErrorMessage';

// Stateless Component

class TextInput extends Component {

    constructor(props) {
        super(props);

        // Step 2
        this.state = {
            errorMessage: ''
        };
    }

    handleInputChange = (event) => {
        var errorMessage = '';

        if (!this.props.validate(event.target.value)) {
            errorMessage = '* Invalid';
        }

        this.props.handleInputChange(event);

        this.setState({errorMessage: errorMessage});
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" type="text"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputChange} />
                <ErrorMessage message={this.state.errorMessage} />
            </div>
        );
    }
}

export default TextInput;
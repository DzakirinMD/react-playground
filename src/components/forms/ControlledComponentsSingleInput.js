import React, { Component } from 'react';

class ControlledComponentsSingleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This keeps the React state in sync with the internal
    // state of the <input> element
    // The form component is synced with the latest changes
    // Useful for validation of forms, error checking etc.
    handleEmailChange(e) {
        // Update the state with the input value each time the
        // input changes
        this.setState({emailValue: e.target.value});
    }

    // Define code for this method to handle form submission.
    // The name of the method should be handleSubmit
    // This allows React to handle form submission, rather than
    // using the browser default submission.
    handleSubmit(e) {
        console.log('Email address submitted: ' + this.state.emailValue);

        alert('Here is the email address you submitted! ' + 
              this.state.emailValue)

        this.setState({emailValue: ""});

        // Prevent default so the default form submission doesn't
        // get triggered.
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="label">
                    Email address:
                </div>
                <input className="input" type="text"
                       value={this.state.emailValue}
                       onChange={this.handleEmailChange} />
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default ControlledComponentsSingleInput;
import React, { Component } from 'react';

// Stateless Component 

class NumberInput extends Component {
    
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" type="number"
                       value={this.props.value}
                       name={this.props.name}
                       onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default NumberInput;
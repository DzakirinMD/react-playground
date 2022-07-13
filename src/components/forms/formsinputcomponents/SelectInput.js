import React, { Component } from 'react';

// Stateless Component

class SelectInput extends Component {
    
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <select value={this.props.value}
                        name={this.props.name}
                        onChange={this.handleInputChange}>
                    {
                        this.props.options.map(
                            (option) => <option key={option}
                                                value={option}>{option}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

export default SelectInput;
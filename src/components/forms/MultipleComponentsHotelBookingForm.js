import React, { Component } from 'react';

class MultipleComponentsHotelBookingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue:'California'
        };
    }

    handleNameChange = (event) => {
        this.setState({nameValue: event.target.value.toUpperCase()});
    }

    handleEmailChange = (event) => {    
        this.setState({emailValue: event.target.value});
    }

    handleNameOfHotelChange = (event) => {
        this.setState({nameOfHotelValue: event.target.value});
    }

    handleLocationChange = (event) => {
        this.setState({locationValue: event.target.value});
    }

    handleSubmit = (event) => {
        alert("Are you sure you want to proceed with the booking? " + 
            this.state.nameOfHotelValue);

        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email Id submitted: ' + this.state.emailValue);    
        console.log('Name Of Hotel submitted: ' + this.state.nameOfHotelValue);
        console.log('Location submitted: ' + this.state.locationValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue:'California'
        });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className = "contents">
                <div className="label">
                    Name:
                </div>
                <textarea className="input"
                          value={this.state.nameValue}
                          onChange={this.handleNameChange} />

                <div className="label">
                    Email Id:
                </div>
                <input className="input" type="text"
                       value={this.state.emailValue}
                       onChange={this.handleEmailChange} />
                                   
                <div className="label">
                    Name Of Hotel:
                </div>
                <select value={this.state.nameOfHotelValue}
                       onChange={this.handleNameOfHotelChange} >
                    <option value="Fantastic Hotels">Fantastic Hotels</option>   
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>
                <div className="label">
                    Location:
                </div>
                <input className="input" type="text"
                       value={this.state.locationValue}
                       onChange={this.handleLocationChange} />

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default MultipleComponentsHotelBookingForm;
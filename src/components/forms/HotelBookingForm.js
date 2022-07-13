import React, { Component } from 'react';
import TextInput from './formsinputcomponents/TextInput';
import NumberInput from './formsinputcomponents/NumberInput';
import SelectInput from './formsinputcomponents/SelectInput';

class HotelBookingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
        };

        this.errors = {
            name: true,
            email: true
        };
    }

    validateEmail = (email) => {
        if (!/.+@.+\..+/.test(email)) {
            this.errors.email = true;
            return false;
        }
        this.errors.email = false;
        return true;
    }

    validateName = (name) => {
        if (!name || name.length < 5) {
            this.errors.name = true;
            return false;
        }

        this.errors.name = false;
        return true;
    }

    handleInputChange = (event) => {

        const name = event.target.name;
        var value = event.target.value;

        if (name === 'nameValue') {
            value = value.toUpperCase();
        }

        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.errors.email) {
            alert('Please enter a valid email address');
            return;
        } else if (this.errors.name) {
            alert('Please enter a name having a minimum of 5 characters');
            return;
        }

        alert("Are you sure you want to proceed with the booking? " + 
            this.state.nameOfHotelValue);

        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email Id submitted: ' + this.state.emailValue);
        console.log('Phone Number submitted: ' + this.state.phoneValue);
        console.log('Name Of Hotel submitted: ' + this.state.nameOfHotelValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels'
        });
    }

    render() {
        return (
            <form className = "contents" onSubmit={this.handleSubmit}>
                <TextInput label={"Name :"}
                           name="nameValue"
                           validate={this.validateName}
                           value={this.state.nameValue}
                           handleInputChange={this.handleInputChange}/>
                <TextInput label={"Email Id :"}
                           name="emailValue"
                           validate={this.validateEmail}
                           value={this.state.emailValue}
                           handleInputChange={this.handleInputChange}/> 
                <NumberInput label={"Phone Number :"}
                             name="phoneValue"
                             value={this.state.phoneValue}
                             handleInputChange={this.handleInputChange}/>           
                <SelectInput label={"Name Of Hotel :"}
                             name="nameOfHotelValue"
                             value={this.state.nameOfHotelValue}
                             options={this.props.hotelNamesOptions}
                             handleInputChange={this.handleInputChange}/>

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

HotelBookingForm.defaultProps = {
    hotelNamesOptions: [
        'Fantastic Hotels',
        'Wonderful Hotels',
        'Comfortable Hotels',
        'Pretentious Hotels'
    ]
};

export default HotelBookingForm;
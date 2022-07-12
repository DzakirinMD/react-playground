// THIS COMPONENT IS UN-USED !!! only for reference on how to use Uncontrolled Componenents
import React, { Component } from 'react';

class UncontrolledComponents extends Component {

    constructor(props) {
        super(props);

        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.nameOfHotelRef = React.createRef();
    }

    handleSubmit = (event) => {
        alert("Are you sure you want to proceed with the booking? " + 
            this.nameOfHotelRef.current.value);

        console.log('Name submitted: ' + 
            this.nameRef.current.value.toUpperCase());
        console.log('Email Id submitted: ' + 
            this.emailRef.current.value);    
        console.log('Name Of Hotel submitted: ' + 
            this.nameOfHotelRef.current.value);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className = "contents">
                <div className="label">
                    Name:
                </div>
                <input className="input"
                       ref={this.nameRef} />

                <div className="label">
                    Email Id:
                </div>
                <input className="input" type="text"
                       ref={this.emailRef} />
                                   
                <div className="label">
                    Name Of Hotel:
                </div>
                <select ref={this.nameOfHotelRef} defaultValue="Comfortable Hotels">
                    <option value="Fantastic Hotels">Fantastic Hotels</option>   
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default UncontrolledComponents;




import React, { Component } from "react";
import PropTypes from "prop-types";

// This is a Class component
class ClassMainContent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title:this.props.pageTitle,
            count:this.props.numTopics
        }
    }

    onClick = () => {
        this.setState(
            {count:this.state.count + 1}
        )
    }

    render(){
        return (
            <classmaincontent>
            <h2>{this.state.title}</h2>
            This is the <b>Class</b> MainContent 
            <p>There are {this.state.count} topics</p>
            <button onClick={this.onClick}>Increase Topic Count</button>
        </classmaincontent>
        )
    }
}

export default ClassMainContent
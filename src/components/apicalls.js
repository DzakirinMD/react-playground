import React, { Component } from "react";

class ApiCalls extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            allStudents: []
        }
    }

    // calling API to get all students
    // componentDidMount() {
    //     fetch("http://localhost:8081/api/v1/student")
    //     .then(response => response.json())
    //     .then(data => this.setState({allStudents: data}));

    componentDidMount() {
        fetch(`http://localhost:8081/api/v1/student`)
        .then((response) => console.log(response.json()));
        // console.log(this.state.allStudents);
    }

    render(){
        return (
           <div>            
           </div> 

            // <div>
            //     {this.state.allStudents.map(emp => (
            //         <div>
            //             {emp.id}
            //         </div>
            //     ))}
            // </div>
        )
    }

}

export default ApiCalls
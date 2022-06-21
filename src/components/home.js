import React from "react";
import PropTypes from "prop-types";

// props is used to access the data
function Home(props){
    return (
        <div>
            <h2>{props.pageTitle}</h2>
            <table>
                <tr>
                    <th>Available URL </th>
                </tr>
                <tr>
                    <td><a href="http://localhost:3000/header">Header</a></td>
                </tr>
                <tr>
                    <td><a href="http://localhost:3000/classmaincontent">classmaincontent</a></td>
                </tr>
                <tr>
                    <td><a href="http://localhost:3000/functionmaincontent">functionmaincontent</a></td>
                </tr>
                <tr>
                    <td><a href="http://localhost:3000/apicalls">API Calls</a></td>
                </tr>
                <tr>
                    <td><a href="http://localhost:3000/footer">Footer</a></td>
                </tr>
            </table> 
        </div>
    )
}

Home.propTypes = {
    pageTitle: PropTypes.string
}

export default Home
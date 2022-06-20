import React, { useState } from "react";
import PropTypes from "prop-types";

// props is used to access the data
function LandingPage(props){
    return (
        <maincontent>
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
                    <td><a href="http://localhost:3000/footer">Footer</a></td>
                </tr>
            </table> 
        </maincontent>
    )
}

LandingPage.propTypes = {
    pageTitle: PropTypes.string
}

export default LandingPage
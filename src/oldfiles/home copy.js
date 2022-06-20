import React from "react";
import PropTypes from "prop-types";

// importing custom components
import Header from './header';
import Menu from "./menu";
import FunctionMainContent from './functionmaincontent';
import ClassMainContent from './classmaincontent';
import Footer from './footer';


// props is used to access the data
function Home(props){
    return (
        <div>
            <Header />
            <Menu />
            <hr />
            <FunctionMainContent pageTitle = {"Class Component Header"} numTopics = {5} />
            <hr />
            <ClassMainContent pageTitle = {"Class Component Header"} numTopics = {10} />
            <hr />
            <Footer />

            {/* <table>
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
            </table>  */}
        </div>
    )
}

Home.propTypes = {
    pageTitle: PropTypes.string
}

export default Home
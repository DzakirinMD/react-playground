import React from "react";
import PropTypes from "prop-types";

// props is used to access the data
function Home(props){
    return (
        <div>
            <h2>{props.pageTitle}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Available URL</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="http://localhost:3000/header">Header</a></td>
                        <td>A header component</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/classmaincontent">classmaincontent</a></td>
                        <td>A main component using CLASS component !</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/functionmaincontent">functionmaincontent</a></td>
                        <td>A main component using FUNCTION component !</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/apicalls">API Calls</a></td>
                        <td>A component showing how to call API (In Development)</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/eventhandlers">Event Handlers</a></td>
                        <td>A component showing how use <b>Event</b></td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/lifecycledidmountphase">Lifecycle Did Mount</a></td>
                        <td>A component showing how lifecycle <b>componentDidMount()</b> work</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/lifecycleunmountmountphase">Lifecycle Un-Mount</a></td>
                        <td>A component showing how lifecycle <b>componentWillUnmount()</b> work</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/lifecyclecomponentdidupdatephase">Lifecycle Did/Should Update</a></td>
                        <td>A component showing how lifecycle <b>componentDidUpdate()</b> work</td>
                    </tr>
                    <tr>
                        <td><a href="http://localhost:3000/footer">Footer</a></td>
                        <td>A footer component</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    )
}

Home.propTypes = {
    pageTitle: PropTypes.string
}

export default Home
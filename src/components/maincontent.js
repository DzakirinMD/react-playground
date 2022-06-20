import React, { useState } from "react";
import PropTypes from "prop-types";

// props is used to access the data
function MainContent(props){
    const [count, setCount] = useState(props.numTopics);

    return (
        <maincontent>
            <h2>{props.pageTitle}</h2>
            This is the MainContent 
            <p>There are {count} topics.</p>
            <button onClick={() => setCount(count+1)}>
                Increase Topic Count</button>
        </maincontent>
    )
}

MainContent.propTypes = {
    pageTitle: PropTypes.string
}

export default MainContent
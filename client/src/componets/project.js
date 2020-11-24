import React from "react";

function Project(props){
    return(
        <div>
            {console.log(props)}
            <h3>{props.projects.name}</h3>
        </div>
    )
}

export default Project;
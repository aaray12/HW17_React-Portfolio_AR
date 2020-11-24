import React from "react";
import projects from "../../projects/projects.json"

function Portfolio(){
   
    return(
        <>
        <div>
            {console.log(projects)}
            <h3>Test Portfolio</h3>
            <ul>
                {projects.map(project => {
                    return(
                    <li>{project.name}</li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default Portfolio;


import React from "react";
import projects from "../../projects/projects.json"
import Project from "../project"

function Portfolio(){
   
    return(
        <>
        <div>
            {console.log(projects)}
            <h3>Test Portfolio</h3>
            <ul>
                {projects.map(project => {
                    return(
                    <li><Project projects = {project}/></li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default Portfolio;


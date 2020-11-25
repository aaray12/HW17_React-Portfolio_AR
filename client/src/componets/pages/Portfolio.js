import React from "react";
import projects from "../../projects/projects.json"
import Project from "../project"

function Portfolio() {
    const styles = {
        proj: {
            textAlign: "center",
            margin: "auto"
        }
    }

    let firstRowArr = []
    let secondRowArr = []
    firstRowArr.push(projects[0])
    firstRowArr.push(projects[1])
    firstRowArr.push(projects[2])
    secondRowArr.push(projects[3])
    secondRowArr.push(projects[4])
    secondRowArr.push(projects[5])

    return (
        <div>
            {/* {console.log(projects)} */}
            <h3>My Portfolio:</h3>
            <div className="row">
                {firstRowArr.map(project => {
                    return (
                        <div style={styles.proj}>
                            <Project projects={project}></Project>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                {secondRowArr.map(project => {
                    return (
                        <div style={styles.proj}>
                            <Project projects={project}></Project>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Portfolio;


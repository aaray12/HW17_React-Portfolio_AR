import React from "react";
import { Card,Accordion, Button } from 'react-bootstrap'
import musicRater from "../componets/images/musicRater.png"
import dayPlanner from "../componets/images/dayPlanner.png"
import noteTaker from "../componets/images/noteTaker.png"
import comingSoon from "../componets/images/comingSoon.png"
import vote2020 from "../componets/images/vote2020.png"

const styles = {
    img:{
        height:"250px",
        width:"20rem"
    },
    ul:{
        listStyleType: "none",
        textAlign: "center", 
      },
    li:{
        textAlign: "center", 
        float: "left"
    }
}
function Project(props){
// import image from props.projects.image
function getImage(image){
    if (image === vote2020){
        return vote2020
    }
    else if(image === musicRater){
        return musicRater
    }
    else if(image === noteTaker){
        return noteTaker
    }
    else if(image === dayPlanner){
        return dayPlanner
    }
    else {
        return comingSoon;
    }
}
    return(
        <div>
            {console.log(dayPlanner)}
            {/* <h3>{props.projects.name}</h3>
            <img src = {myImage}></img>
            {console.log("image prop", placeholder2)} */}
            <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src = { getImage(props.projects.image)} style = {styles.img} />
                <Card.Body>
                    <Card.Title>{props.projects.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Accordion defaultActiveKey="0">
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Links
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          
                            <div><a href ={props.projects.repoLink}>Github Repo</a></div>
                            <div><a href ={props.projects.deployedLink}>Deployed Site</a></div>
                         
                        </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project;
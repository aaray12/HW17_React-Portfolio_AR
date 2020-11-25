import React from "react";
import { Card,Accordion, Button } from 'react-bootstrap'
// require("../componets/images")
import placeholder from "../componets/images/placeholder.jpeg"
import placeholder2 from "../componets/images/placeholder2.jpg"

const styles = {
    img:{
        height:"250px",
        width:"20rem"
    }
}
function Project(props){
// import image from props.projects.image
function getImage(image){
    if (image === placeholder){
        return placeholder
    }
    else if(image === placeholder2){
        return placeholder2
    }
    else {
        return placeholder2;
    }
}
const myImage = getImage(props.projects.image);
    return(
        <div>
            {/* {console.log(props)} */}
            {/* <h3>{props.projects.name}</h3>
            <img src = {myImage}></img>
            {console.log("image prop", placeholder2)} */}
            <Card style={{ width: '20rem'}}>
                <Card.Img variant="top" src = {myImage} style = {styles.img} />
                <Card.Body>
                    <Card.Title>{props.projects.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Accordion defaultActiveKey="0">
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            details
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>{props.projects.shortDescription}</Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project;
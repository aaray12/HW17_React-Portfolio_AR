import React from "react";
import image from "../images/me.png"

const styles = {
    div:{
        // textAlign: "center",
        // float: "left"
        // position: "relative",
        // bottom: "0%",
    },
    img:{
        position: "fixed",
        bottom: "0%",
        // left: "0%",
        // margin: "auto"
        // textAlign:"center"
    },
    h1:{
        fontSize: "100px",
        marginTop: "25%",
        // float: ""
    },
    divs:{
        // position: "absolute",
        top: "33%"
        
    },
}
function Home(){
    return(
        <div  align = "center">
        <div style = {styles.divs} align = "center">
            <h1 style = {styles.h1}>Aaron</h1>
            {/* <img style = {styles.img} src = {image} alt = "png of Aaron"/> */}
        </div>
        <div style = {styles.div}>
        <img style = {styles.img} src = {image} alt = "png of Aaron"/>
        </div>
        </div>
    )
}

export default Home;
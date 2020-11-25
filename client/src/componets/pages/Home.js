import React from "react";
import image from "../images/me.png"

const styles = {
    div:{
        textAlign: "center",
    },
    img:{
        position: "fixed",
        bottom: 0,
        textAlign:"center"
    },
    h1:{
        fontSize: "100px",
        marginTop: "100px",
    }
}
function Home(){
    return(
        <>
        <div style = {styles.div} align = "center">
            <h1 style = {styles.h1}>Aaron</h1>
            <img style = {styles.img} src = {image} alt = "png of Aaron"/>
        </div>
        {/* <div style = {styles.div} align = "center">
        <img style = {styles.img} src = {image} alt = "png of Aaron"/>
        </div> */}
        </>
    )
}

export default Home;
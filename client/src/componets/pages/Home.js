import React from "react";
import image from "../images/me.png"

const styles = {
    div:{
        // float: "bottom",
        textAlign: "center",
        // height: "100px",
        // justifyContent: "center"
    },
    img:{
        position: "fixed",
        bottom: 0,
        right: 375,
        
    },
    h1:{
        fontSize: "100px",
        position: "fixed",
        top: 200,
        right: 450,
    
    }
}
function Home(){
    return(
        <>
        <div style = {styles.div} >
            <h1 style = {styles.h1}>Aaron</h1>
          
            <img style = {styles.img} src = {image}/>
            
        </div>
        {/* <img style = {styles.img} src = {image}/> */}
        </>
    )
}

export default Home;
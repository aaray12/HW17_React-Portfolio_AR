import React from "react";
const styles = {
    footer:{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center"
    }
}
function Footer(){
    return(
        <div style = {styles.footer}>
            <p>Email: aaray619@gmail.com || Phone: (847)999-8591</p>
        </div>
    )
}
export default Footer
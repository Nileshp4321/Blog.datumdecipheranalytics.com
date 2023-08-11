import React from "react";
const textColor={
    color:"#39b04c",
    fontWeight:"700",
    opacity:"0.9"
}
const Heading=()=>{
    return(
        <>
            <h1 className="text-center text-primary" >Datum Decipher Analytics Blogs</h1>
            <p className="text-center text-success"  style={textColor}>Stay informed about the latest in outsourcing and offshore staffing</p>
        </>
    );
}
export default Heading;
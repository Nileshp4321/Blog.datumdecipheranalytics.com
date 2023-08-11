import React from "react";
import { Link } from "react-router-dom";
const Pages=()=>{
    return(
        <>
               <Link to="/about">Home</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/mainpage">Main Page</Link>
        </>
    );
}
export default Pages;
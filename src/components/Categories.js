import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <>

            <div className="mt-5 mb-3 row">
                <b><h3>Categories</h3></b>
                <div className="card shadow-lg border-white " >
                    <div className="card-body">
                        <ul>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/category/business-process-outsourcing/" className="recentposts" >BUSINESS PROCESS OUTSOURCING</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/category/data-security/" className="recentposts"> DATA SECURITY</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/category/digital-marketing/" className="recentposts" >DIGITAL MARKETING</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/category/general/" className="recentposts" >GENERAL</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/category/outsourcing/" className="recentposts" >OUTSOURCING</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}
export default Categories;
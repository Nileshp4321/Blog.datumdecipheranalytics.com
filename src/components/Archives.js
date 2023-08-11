import React from "react";
import { Link } from "react-router-dom";
const Archives = () => {
    return (
        <>

            <div className="mt-5 mb-3 row">
                <b><h3>Archives</h3></b>
                <div className="card shadow-lg border-white " >
                    <div className="card-body">
                        <ul>

                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/2023/05/" className="recentposts" >May 2023</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/2023/04/" className="recentposts"> April 2023</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/2023/01/" className="recentposts" >January 2023</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/2022/10/" className="recentposts" >October 2022</Link></li>
                            <li className="listitem"><Link to="https://blogs.datumdecipher.com/index.php/2022/06/" className="recentposts" >June 2022</Link></li>
                            <li className="listitem" ><Link to="https://blogs.datumdecipher.com/index.php/2021/07/" className="recentposts" >June 2021</Link></li>
                            <li className="listitem" ><Link to="https://blogs.datumdecipher.com/index.php/2021/02/" className="recentposts" >February 2021</Link></li>
                            <li className="listitem" ><Link to="https://blogs.datumdecipher.com/index.php/2020/12/" className="recentposts" >December 2020</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}
export default Archives;
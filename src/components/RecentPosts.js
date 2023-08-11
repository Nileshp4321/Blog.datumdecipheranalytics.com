import React from "react";
import { Link } from "react-router-dom";
const RecentPosts = () => {
    return (
        <>
            
            <div className="mt-5 mb-3 row">
            <b><h3>Recent Posts</h3></b>
                <div className="card shadow-lg border-white " >
                    <div className="card-body">
                        <ul>
                        
                            <li className="listitem"><Link className="recentposts" to="https://blogs.datumdecipher.com/index.php/2023/05/25/personalization-and-targeting-strategies-in-lead-generation/">Personalization and targeting strategies in lead generation</Link></li>
                            <li className="listitem"><Link className="recentposts" to="https://blogs.datumdecipher.com/index.php/2023/04/14/digital-marketing-trends-2023/">Digital Marketing Trends – 2023</Link></li>
                            <li className="listitem"><Link className="recentposts" to="https://blogs.datumdecipher.com/index.php/2023/01/05/the-future-of-data-privacy-trends-and-technologies-to-watch/">The Future of Data Privacy: Trends and Technologies to Watch</Link></li>
                            <li className="listitem"><Link className="recentposts" to="https://blogs.datumdecipher.com/index.php/2022/10/29/5-ways-to-securely-manage-sensitive-data-in-the-cloud/">5 Ways to Securely Manage Sensitive Data in the Cloud</Link></li>
                            <li className="listitem"><Link className="recentposts" to="https://blogs.datumdecipher.com/index.php/2022/06/03/outsourcing-to-stay-on-top-top-uk-companies-leading-the-way-in-2022/">Outsourcing to Stay on Top: Top UK Companies Leading the Way in 2022</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}
export default RecentPosts;
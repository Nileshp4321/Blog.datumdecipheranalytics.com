import React from "react";
import ArticlesData from "./Articlesdata";
import "../App.css"
import { Link } from "react-router-dom";
const Articles = () => {
    // console.log(ArticlesData);
    return (
        <>
            <div className=" mt-5 mb-3 ms-1 row">
                {
                    ArticlesData.map((data, index) => {
                        return (
                            <>
                                <div className="col-md-12 ms-4 card shadow-lg border-white mb-5" key={index} style={{ width: "25rem", height: "37rem" }}>
                                    <img src={data.img} className="card-img-top img-thumbnail border-white" alt="ok" />
                                    <Link to={data.label} className="allLinks card-title bg-dark text-white w-50 text-center  p-2 ms-3 mt-3 border-primary ">{data.labelname}</Link>

                                    {data.labelname2 ? <Link to={data.labellink2} className="allLinks card-title bg-dark text-white w-50 text-center  p-2 ms-3 mt-3 border-primary ">{data.labelname2}</Link> : null}
                                    <div className="card-body">
                                        <Link to={data.titlelink} className="text-dark  allLinks card-title text-primary mb-3Wx">{data.title}</Link><br></br>
                                        <Link to={data.clink} className="text-dark  allLinks fs-6  fw-bold">{data.cname}</Link>
                                        <Link to={data.postlink} className="text-dark  allLinks fw-bold ms-4">{data.postdate} </Link>
                                        <hr></hr>
                                        <p className="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
                
            </div>

        </>
    );
}
export default Articles;
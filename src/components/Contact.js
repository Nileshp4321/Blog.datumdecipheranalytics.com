import React from "react";
import Homephoto from "./Images/homephoto";
import Heading from "./Heading";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchDiv from "./SearchDiv";
import RecentComment from "./RecentComments";
import RecentPosts from "./RecentPosts";
import Archives from "./Archives";
import Categories from "./Categories";

const Contact = () => {
    return (
        <>
            <Homephoto />
            <Heading />
            <Navbar />
            <section className='container-fluid row' >
                <div className='col-md-8'>
                    <h4 className="ms-5 mt-3">Contact us</h4>
                    <div className="m-1">
                        <img src="https://blogs.datumdecipher.com/wp-content/uploads/2023/04/contactus-header.jpg" className="img-fluid" style={{ width: "51.5rem", margin: "1.3rem" }} />
                    </div>
                    <div className="container ms-3">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control w-50" id="exampleFormControlInput1" placeholder="Nilesh Pushkarna" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email </label>
                        <input type="email" className="form-control w-50" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Subject</label>
                        <input type="email" className="form-control w-50" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <button className="btn btn-dark text-center pe-5 ps-5">Submit</button>
                    </div>
                </div>
                <div className='col-md-4 '>
                    <SearchDiv />
                    <RecentPosts />
                    <RecentComment />
                    <Archives />
                    <Categories />
                </div>
            </section>
            <Footer />
        </>
    );
}
export default Contact
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

const About = () => {
    return (
        <>
            <Homephoto />
            <Heading />
            <Navbar />
            <section className='container-fluid row' >
                <div className='col-md-8'>
                    <h4 className="ms-5 mt-3">About us</h4>
                    <div className="m-1">
                        <img src="https://blogs.datumdecipher.com/wp-content/uploads/2023/04/about-us-banner-background.jpg" className="img-fluid" style={{width:"51rem",margin:"1.3rem"}}  />
                    </div>
                    <p className="para p-2 m-3">Datum Decipher Analytics is a global outsourcing company that provides a wide range of data processing solutions to clients in various industries, including healthcare, finance, logistics, and e-commerce. Headquartered in Udaipur India, the company has a global network of data processing centers that enables them to provide services to clients worldwide.</p>
                    <p className="para p-2 m-3">The company’s team of skilled data professionals uses the latest data processing technologies and techniques to provide accurate, reliable, and timely data processing services to clients. We have expertise in various data-related services, including data entry, data conversion, data mining, data cleansing, and data analysis.</p>
                    <p className="para p-2 m-3">Datum Decipher Analytics is committed to delivering high-quality services that meet or exceed clients’ expectations. The company’s customer-centric approach focuses on providing customized solutions that are tailored to clients’ specific needs. We work closely with clients to understand their business requirements and develop data processing solutions that help them make informed business decisions.</p>
                    <p className="para p-2 m-3">Datum Decipher Analytics has a proven track record of delivering high-quality services that meet clients’ needs. We have a high level of customer satisfaction and have received numerous positive testimonials from satisfied clients.</p>
                    <p className="para p-2 m-3">One of our key competitive advantages is our focus on quality, security, and confidentiality. We adhere to strict data security protocols to ensure that clients’ data is always kept safe and secure. They also provide 24/7 customer support to ensure that clients’ needs are always met.</p>
                    <p className="para p-2 m-3">Overall, Datum Decipher Analytics is a trusted partner for businesses looking to outsource their data processing needs. Our services are scalable and customizable, and their team of skilled professionals is dedicated to delivering high-quality solutions that help clients make better business decisions based on accurate and reliable data.</p>
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
export default About;
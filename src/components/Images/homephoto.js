import React from "react";
// import MainPage from "../components/Page3";
const Homephoto = () => {
    return (
        <>
            <picture >
                <source srcSet="homephoto.jpg" type="image/svg+xml" />
                <img src="homephoto.jpg" className="img-fluid img-thumbnail w-100 border-white" alt="..." />
            </picture>
        </>
    );
}
export default Homephoto;
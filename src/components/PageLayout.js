import React from "react";
import SearchDiv from "./SearchDiv";
import RecentComment from "./RecentComments";
import RecentPosts from "./RecentPosts";
import Archives from "./Archives";
import Categories from "./Categories";
import Footer from "./Footer";
const SideBar = () => {
    return (
        <>
            <SearchDiv />
            <RecentPosts />
            <RecentComment />
            <Archives />
            <Categories />
            <Footer />
        </>
    );
}
export default SideBar;
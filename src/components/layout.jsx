import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, projectData, privacy }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer projectData={projectData} privacy={privacy} />
        </>
    )
}

export default Layout
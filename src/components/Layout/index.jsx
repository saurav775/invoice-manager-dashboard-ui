import React from "react";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout-container">
      <div className="left-content">
        <Sidebar />
      </div>
      <div className="right-content">
        <Breadcrumb />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

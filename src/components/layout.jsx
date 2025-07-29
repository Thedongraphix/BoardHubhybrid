import React, { Fragment } from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main
        id="content"
        sx={{
          variant: "layout.main",
          background: "linear-gradient(135deg, #ffffff 0%, #fafbff 30%, #f8fafc 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          pt: ["80px", "90px", "100px"], // Add padding to account for fixed header
        }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

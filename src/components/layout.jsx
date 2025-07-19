import React, { Fragment, useState } from "react";
import Sticky from "react-stickynode";

import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main
        id="content"
        sx={{
          variant: "layout.main",
          background: "linear-gradient(135deg, #ffffff 0%, #fafbff 30%, #f8fafc 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

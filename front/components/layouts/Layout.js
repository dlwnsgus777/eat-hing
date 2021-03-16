import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Left from "./Left";

function Layout({children}) {
  return (
      <>
      <Navbar />
      <Left />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default Layout;

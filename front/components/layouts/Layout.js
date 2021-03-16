import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Left from "./Left";

function Layout({children}) {
  return (
      <>
      <Header />
      <Left />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default Layout;

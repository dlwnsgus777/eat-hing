import React, { useCallback, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Left from "./Left";
import EatingMap from "../EatingMap"

function Layout({children}) {
   const [open, setOpen] = useState(false);

     const handleToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar open={open} handleToggleOpen={handleToggleOpen} />
      <Left open={open} handleToggleOpen={handleToggleOpen}>
        <div>{children}</div>
      </Left>
      <div>asdawdsawljkdbnasdd</div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout;

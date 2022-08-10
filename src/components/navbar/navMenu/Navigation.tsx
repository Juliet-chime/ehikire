import React, { useState } from "react";
import Drawer from "./Drawer";
import routes from "../navItem";
import NavMenu from "./NavMenu";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMenu toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isOpen} routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Navigation;

import React from "react";
import Navigation from "./navMenu/Navigation";
// import NavMenu from "./navMenu/NavMenu";
import NavProfile from "./NavProfile";
import NavSocial from "./NavSocial";
import { NavBarWrapper } from "./style";

function NavBar() {
  return (
    <NavBarWrapper>
      <NavSocial />
      <NavProfile />
      <Navigation />
    </NavBarWrapper>
  );
}

export default NavBar;

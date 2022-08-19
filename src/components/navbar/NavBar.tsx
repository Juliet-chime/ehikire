import React from "react";
import { useAppContext } from "../../context";
// import NavLayout from "../navnav/navLayout";
// import Submenu from "../navnav/Submenu";
import Navigation from "./navMenu/Navigation";
// import NavMenu from "./navMenu/NavMenu";
import NavProfile from "./NavProfile";
import NavSocial from "./NavSocial";
import { NavBarWrapper } from "./style";

function NavBar() {
  const { screenSize } = useAppContext();
  return (
    <NavBarWrapper>
      {screenSize <= 900 ? (
        ""
      ) : (
        <>
          <NavSocial />
          <NavProfile />
        </>
      )}

      {/* <NavLayout />
      <Submenu /> */}
      <Navigation />
    </NavBarWrapper>
  );
}

export default NavBar;

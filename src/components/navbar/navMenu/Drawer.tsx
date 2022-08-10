import React from "react";
import ExpandMenu from "./ExpandMenu";
import {
  Backdrop,
  DrawerNavbarBrand,
  DrawerNavRoute,
  DrawerRightNav,
  NavDrawer,
} from "./style";
import { Props } from "./types";
import logo from "../../../assest/images/picture/ekiLogo.png";

function Drawer({ isOpen, toggleDrawer, routes }: Props) {
  return (
    <div>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <NavDrawer isOpen={isOpen}>
        <DrawerRightNav>
          <DrawerNavbarBrand>
            <img src={logo} alt="" />
          </DrawerNavbarBrand>
          <div>
            {routes?.map((route: any) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <DrawerNavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                  style={({ isActive }) => ({
                    color: isActive ? "#f9d342" : "#333",
                  })}
                >
                  {route.name}
                </DrawerNavRoute>
              );
            })}
          </div>
        </DrawerRightNav>
      </NavDrawer>
    </div>
  );
}

export default Drawer;

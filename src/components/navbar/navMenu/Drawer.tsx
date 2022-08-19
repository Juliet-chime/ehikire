import React from "react";
import { FaTimes } from "react-icons/fa";
// import { Language } from "../style";
import ExpandMenu from "./ExpandMenu";
import { Backdrop, DrawerNavRoute, DrawerRightNav, NavDrawer } from "./style";
import { Props } from "./types";
import flag from "../../../assest/images/icons/flag.png";

function Drawer({ isOpen, toggleDrawer, routes }: Props) {
  return (
    <div>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <NavDrawer isOpen={isOpen}>
        <DrawerRightNav>
          <div className="drawerNav">
            <h4>The Home of satisfaction</h4>
            <button type="button" onClick={toggleDrawer}>
              <FaTimes fontSize={18} />
            </button>
          </div>
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
          <div className="language-login">
            <div className="languagefeature">
              <select>
                <option>Language</option>
                <option value="">English</option>
              </select>
              <span>
                <img src={flag} alt="flag" />
              </span>
            </div>

            <button type="button">Signin / Signup</button>
          </div>
        </DrawerRightNav>
      </NavDrawer>
    </div>
  );
}

export default Drawer;

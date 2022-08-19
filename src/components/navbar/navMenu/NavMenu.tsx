import React, { useEffect } from "react";
// import { FaBars } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../../context";
import routes from "../navItem";
import {
  // MenuButton,
  NavMenuHolder,
  NavRoute,
  NavRoutes,
  SmallScreenNav,
  // SubRoute,
  // SubRouteMenu,
  // SubRoutesContainer,
} from "./style";
import logo from "../../../assest/images/picture/ekiLogo.png";
import { Props } from "./types";
import Menu from "./Menu";

function NavMenu({ toggleDrawer }: Props) {
  const { scroll, setScroll, screenSize } = useAppContext();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("resize", handleScroll);
  }, [scroll]);

  return (
    <>
      {" "}
      {screenSize <= 900 ? (
        <>
          <SmallScreenNav>
            <img src={logo} alt="" />

            <h4>Ekihire</h4>
            <button type="button" onClick={toggleDrawer}>
              <span>
                <FaBars
                  style={{
                    color: "rgba(0, 0, 0, 0.7)",
                    fontSize: "16px",
                    marginRight: "10px",
                  }}
                />
              </span>
            </button>
          </SmallScreenNav>{" "}
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <NavMenuHolder scroll={scroll}>
          <button type="button">
            <span>
              <FaBars
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "16px",
                  marginRight: "10px",
                }}
              />{" "}
              All categories
            </span>
          </button>

          <NavRoutes>
            {routes.map((route: any) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </NavMenuHolder>
      )}
    </>
  );
}

export default NavMenu;

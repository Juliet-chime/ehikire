import React, { useEffect } from "react";
// import { FaBars } from "react-icons/fa";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../../../context";
import routes from "../navItem";
import {
  MenuButton,
  NavMenuHolder,
  NavRoute,
  NavRoutes,
  SubRoute,
  SubRouteMenu,
  SubRoutesContainer,
} from "./style";

// import { NavMenuHolder, Uli } from "./style";
import { Props } from "./types";

// export const menuItems = [
//   {
//     title: "Services",
//     submenu: [
//       {
//         title: "web design",
//       },
//       {
//         title: "web development",
//       },
//       {
//         title: "SEO",
//       },
//     ],
//   },
//   {
//     title: "home",
//     submenu: [
//       {
//         title: "web design",
//       },
//       {
//         title: "web development",
//       },
//       {
//         title: "SEO",
//       },
//     ],
//   },
// ];

// export interface Propsf {
//   submenus: any;
//   dropdown: any;
// }

// function Dropdown({ submenus, dropdown }: Propsf) {
//   return (
//     <Uli dropdown={dropdown}>
//       {submenus.map((submenu: any) => (
//         <li key={submenu.title} className="menu-items">
//           <a href="/#">{submenu.title}</a>
//         </li>
//       ))}
//     </Uli>
//   );
// }

// function MenuItems({ items }: any) {
//   const [dropdown, setDropdown] = useState(false);
//   return (
//     <li className="menu-items">
//       {items.submenu ? (
//         <>
//           <button
//             type="button"
//             aria-haspopup="menu"
//             style={{ border: "solid red", cursor: "pointer" }}
//             aria-expanded={dropdown ? "true" : "false"}
//             onClick={() => setDropdown((prev: any) => !prev)}
//           >
//             {items.title}{" "}
//           </button>
//           <Dropdown submenus={items.submenu} dropdown={dropdown} />
//         </>
//       ) : (
//         <a href="/#">{items.title}</a>
//       )}
//     </li>
//   );
// }

function NavMenu({ toggleDrawer }: Props) {
  // const [scrolll, setScrolll] = useState(0);
  const { scroll, setScroll } = useAppContext();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("resize", handleScroll);
  }, [scroll]);

  const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
  // const ff = window.scroll;
  // alert(window.pageYOffset);
  // alert(window.pageXOffset);
  console.log(scroll);
  console.log(document.documentElement.scrollHeight);
  console.log(scrollbarWidth);
  console.log(window.scrollY, "fg");
  return (
    <NavMenuHolder scroll={scroll}>
      <button type="button" onClick={toggleDrawer}>
        <span className="hidebar">
          <FaBars
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: "16px",
              marginRight: "10px",
            }}
          />{" "}
          All categories
        </span>
        <span className="showcategory">View categories</span>
      </button>

      {/* <nav>
        <ul className="menus">
          {menuItems.map((menu) => {
            return <MenuItems items={menu} key={menu.title} />;
          })}
        </ul>
      </nav> */}

      <NavRoutes>
        {routes?.map((route) => {
          if (route.subRoutes) {
            return (
              <SubRouteMenu>
                <MenuButton
                  to={route.link}
                  style={({ isActive }) => ({
                    color: isActive ? "#f9d342" : "#000",
                  })}
                >
                  {route.name}{" "}
                  <span>
                    <FaCaretDown />
                  </span>
                </MenuButton>

                <SubRoutesContainer>
                  <div className="div1">
                    {route.subRoutes.slice(0, 7).map((subRoute) => (
                      <SubRoute
                        to={subRoute.link}
                        key={subRoute.name}
                        style={({ isActive }) => ({
                          color: isActive ? "#f9d342" : "#000",
                        })}
                      >
                        {subRoute.name}
                      </SubRoute>
                    ))}
                  </div>
                  <div className="div1">
                    {route.subRoutes.slice(7, 13).map((subRoute) => (
                      <SubRoute
                        to={subRoute.link}
                        key={subRoute.name}
                        style={({ isActive }) => ({
                          color: isActive ? "#f9d342" : "#000",
                        })}
                      >
                        {subRoute.name}
                      </SubRoute>
                    ))}
                  </div>
                  <div className="div1">
                    {route.subRoutes.slice(13, 19).map((subRoute) => (
                      <SubRoute
                        to={subRoute.link}
                        key={subRoute.name}
                        style={({ isActive }) => ({
                          color: isActive ? "#f9d342" : "#000",
                        })}
                      >
                        {subRoute.name}
                      </SubRoute>
                    ))}
                  </div>
                  <div className="div1">
                    {route.subRoutes.slice(19, 25).map((subRoute) => (
                      <SubRoute
                        to={subRoute.link}
                        key={subRoute.name}
                        style={({ isActive }) => ({
                          color: isActive ? "#f9d342" : "#000",
                        })}
                      >
                        {subRoute.name}
                      </SubRoute>
                    ))}
                  </div>
                  <div className="div1">
                    {route.subRoutes.slice(25, 31).map((subRoute) => (
                      <SubRoute
                        to={subRoute.link}
                        key={subRoute.name}
                        style={({ isActive }) => ({
                          color: isActive ? "#f9d342" : "#000",
                        })}
                      >
                        {subRoute.name}
                      </SubRoute>
                    ))}
                  </div>
                  <div className="div1">
                    {route.subRoutes
                      .slice(31, route.subRoutes.length + 1)
                      .map((subRoute) => (
                        <SubRoute
                          to={subRoute.link}
                          key={subRoute.name}
                          style={({ isActive }) => ({
                            color: isActive ? "#f9d342" : "#000",
                          })}
                        >
                          {subRoute.name}
                        </SubRoute>
                      ))}
                  </div>
                </SubRoutesContainer>
              </SubRouteMenu>
            );
          }
          return (
            <NavRoute to={route.link} key={route.name}>
              {route.name}
            </NavRoute>
          );
        })}
      </NavRoutes>
    </NavMenuHolder>
  );
}

export default NavMenu;

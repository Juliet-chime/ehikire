import React from "react";
import { DrawerNavRoute } from "../../navbar/navMenu/style";
import SideCategoryExpandMenu from "./sideCategoryExpand";
import { SideMenuTypes } from "./SidemenuType";
import { SideMenuHeading } from "./style";

export default function SideCategory({ routes, heading }: SideMenuTypes) {
  return (
    <div>
      <SideMenuHeading>{heading}</SideMenuHeading>
      {routes?.map((route: any) => {
        if (route.subRoutes) {
          return <SideCategoryExpandMenu route={route} key={route.name} />;
        }
        return (
          <DrawerNavRoute
            // onClick={toggleDrawer}
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
  );
}

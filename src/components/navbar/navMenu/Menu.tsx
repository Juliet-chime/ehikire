import React from "react";
import { FaCaretDown } from "react-icons/fa";
import {
  MenuButton,
  SubRoute,
  SubRouteMenu,
  SubRoutesContainer,
} from "./style";

function Menu({ route }: any) {
  return (
    <SubRouteMenu>
      <MenuButton to={route.name}>
        {route.name} <FaCaretDown />
      </MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute: any) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SubRouteMenu>
  );
}

export default Menu;

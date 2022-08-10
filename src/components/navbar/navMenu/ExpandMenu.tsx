import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import {
  ExpandMenuButton,
  ExpandSubRoute,
  ExpandSubRoutesContainer,
} from "./style";

function ExpandMenu({ route }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <ExpandMenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </ExpandMenuButton>
      <ExpandSubRoutesContainer isOpen={isMenuOpen}>
        <ExpandSubRoute
          to={route.link}
          style={({ isActive }) => ({
            color: isActive ? "#f9d342" : "#333",
          })}
        >
          {route.name}
        </ExpandSubRoute>
        {route.subRoutes.map((subRoute: any) => (
          <ExpandSubRoute
            to={subRoute.link}
            key={subRoute.name}
            style={({ isActive }) => ({
              color: isActive ? "#f9d342" : "#333",
            })}
          >
            {subRoute.name}
          </ExpandSubRoute>
        ))}
      </ExpandSubRoutesContainer>
    </div>
  );
}

export default ExpandMenu;

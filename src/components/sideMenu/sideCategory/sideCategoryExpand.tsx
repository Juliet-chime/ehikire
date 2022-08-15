import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import {
  SideCategoryButton,
  SideCategoryContainer,
  SideCategorySubRoute,
} from "./style";

function SideCategoryExpandMenu({ route }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <SideCategoryButton onClick={toggleMenu}>
        <span>
          {" "}
          <img src={route.image} alt="" /> {route.name}{" "}
        </span>
        {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </SideCategoryButton>
      <SideCategoryContainer isOpen={isMenuOpen}>
        <SideCategorySubRoute
          to={route.link}
          style={({ isActive }) => ({
            color: isActive ? "#f9d342" : "#333",
          })}
        >
          {route.name}
        </SideCategorySubRoute>
        {route.subRoutes.map((subRoute: any) => (
          <SideCategorySubRoute
            to={subRoute.link}
            key={subRoute.name}
            style={({ isActive }) => ({
              color: isActive ? "#f9d342" : "#333",
            })}
          >
            {subRoute.name}
          </SideCategorySubRoute>
        ))}
      </SideCategoryContainer>
    </div>
  );
}

export default SideCategoryExpandMenu;

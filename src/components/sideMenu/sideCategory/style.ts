import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Props } from "../../navbar/navMenu/types";

export const SideMenuHeading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 36px;
  color: #000000;
`;

export const SideCategoryButton = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export const SideCategoryContainer = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;

export const SideCategorySubRoute = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  font-size: 12px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

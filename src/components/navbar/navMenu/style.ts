import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Props } from "./types";

export const NavMenuHolder = styled.button`
  position: relative;
  width: 100%;
  border: none;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 190px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.115385px;
  color: #111111;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.115385px;
    color: #111111;
  }
  .hidebar {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .showcategory {
    display: none;
    font-size: 14px;
    @media (max-width: 768px) {
      display: block;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

export const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarBrand = styled.h2`
  font-size: 3rem;
`;

export const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: black;
`;

export const NavRoute = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

// subRoutes style

export const SubRoutesContainer = styled.div`
  position: absolute;
  width: 200vh;
  overflow: hidden;
  z-index: -9;
  text-align: justify;
  display: flex;
  justify-content: center;
  gap: 15px;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0.5rem;
  top: 58px;
  left: 3rem;
  background: #e5e5e5;
  /* display: none; */
  visibility: hidden;
  opacity: 0;
  border-radius: 0rem 0rem 1rem 1rem;
  /* transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out; */
  .div1 {
    display: flex;
    flex-direction: column;
  }
`;

export const SubRouteMenu = styled.div`
  /* position: relative; */
  /* display: inline-block; */
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

export const MenuButton = styled(NavLink)`
  padding: 0.5rem 0.7rem;
  display: flex;
  font-size: 12px;
  text-decoration: none;
  color: black;
  &:hover {
    transition: 0.5s ease;
    color: rgba(0, 0, 0, 0.5);
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

export const SubRoute = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  font-size: 12px;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  &:hover {
    transition: 0.3s ease-in;
    color: rgba(0, 0, 0, 0.5);
  }
`;

// expand style

export const ExpandMenuButton = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
`;

export const ExpandSubRoutesContainer = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;

export const ExpandSubRoute = styled(NavLink)`
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

// drawer style

export const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const NavDrawer = styled.div<Props>`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  overflow: scroll;
  background-color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

export const DrawerRightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const DrawerNavbarBrand = styled.h2`
  font-size: 3rem;
`;

export const DrawerNavRoutes = styled.div``;

export const DrawerNavRoute = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const DrawerLoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;

export const NavButtonHolder = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 600;
    margin-left: 30px;
  }
`;

export const Uli = styled.ul<Props>`
  display: ${(props) => (props.dropdown ? "block" : "none")}; ;
`;

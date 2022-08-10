import React from "react";
import { FaTimes } from "react-icons/fa";
import { SideBarWrapper } from "./style";
import { useAppContext } from "../../context";

export default function SideMenu() {
  const { active, setActive, screenSize } = useAppContext();

  // const { active } = useAppContext();

  const handleClose = () => {
    if (active && screenSize <= 900) {
      setActive(false);
    }
  };
  return (
    <div>
      {active && (
        <SideBarWrapper active={active}>
          <FaTimes onClick={handleClose} cursor="pointer" />
          <ul>
            <li>egg</li>
            <li>egg</li>
            <li>egg</li>
            <li>egg</li>
            <li>egg</li>
          </ul>
        </SideBarWrapper>
      )}
    </div>
  );
}

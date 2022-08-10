import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../context";
import { FullBarStyle } from "../../style";

export default function Fullbar({ children }: any) {
  const { active, setActive } = useAppContext();
  return (
    <FullBarStyle active={active}>
      <div>
        <FaBars
          onClick={() => setActive((prev: any) => !prev)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {children}
    </FullBarStyle>
  );
}

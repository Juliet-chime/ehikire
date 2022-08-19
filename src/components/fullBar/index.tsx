import React from "react";
import { useAppContext } from "../../context";
import { FullBarStyle } from "../../style";

export default function Fullbar({ children }: any) {
  const { active } = useAppContext();
  return <FullBarStyle active={active}>{children}</FullBarStyle>;
}

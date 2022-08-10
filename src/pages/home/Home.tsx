import React from "react";
import Fullbar from "../../components/fullBar";
// import { FaBars } from "react-icons/fa";
import SideMenu from "../../components/sideMenu/SideMenu";
import { PageWrapper } from "../../style";
// import { useAppContext } from "../../context";

export default function Home() {
  // const { active, setActive } = useAppContext();
  return (
    <PageWrapper>
      <SideMenu />
      <Fullbar>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        voluptatum optio cum sapiente itaque quis non consequuntur deserunt
        laboriosam beatae.
      </Fullbar>
    </PageWrapper>
  );
}

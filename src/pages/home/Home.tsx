import React from "react";
import Fullbar from "../../components/fullBar";
import routes, { popularRoutes } from "../../components/navbar/navItem";
import MultipleRange from "../../components/sideMenu/mutipleRange/MultipleRange";
import SideCategory from "../../components/sideMenu/sideCategory/SideCategory";
// import Mu
// import { FaBars } from "react-icons/fa";
import SideMenu from "../../components/sideMenu/SideMenu";
import { PageWrapper } from "../../style";
import BannerWrapper from "./style";
// import routes from "../../components/navbar/navItem";
// import { useAppContext } from "../../context";

export default function Home() {
  // const { active, setActive } = useAppContext();
  return (
    <div>
      <BannerWrapper>hfgdhd</BannerWrapper>
      <PageWrapper>
        <SideMenu
          multipleRange={<MultipleRange />}
          category={<SideCategory routes={routes} heading="Category" />}
          popularCategory={
            <SideCategory routes={popularRoutes} heading="Popular Category" />
          }
        />
        <Fullbar>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          voluptatum optio cum sapiente itaque quis non consequuntur deserunt
          laboriosam beatae.fghdjskjdfhdjskjdhfcdjskdhfdjs
        </Fullbar>
      </PageWrapper>
    </div>
  );
}

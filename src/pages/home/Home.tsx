import React from "react";
import { FaSearch } from "react-icons/fa";
import Fullbar from "../../components/fullBar";
import routes, { popularRoutes } from "../../components/navbar/navItem";
import MultipleRange from "../../components/sideMenu/mutipleRange/MultipleRange";
import SideCategory from "../../components/sideMenu/sideCategory/SideCategory";
import SideMenu from "../../components/sideMenu/SideMenu";
import { PageWrapper } from "../../style";
import { BannerWrapper } from "./style";
import qr from "../../assest/images/icons/qr.png";
import { useAppContext } from "../../context";
import PopularAds from "./PopularAds";
import TopAds from "./TopAvailable";
import TrendingPost from "./TrendingPost";
import MobileHomeView from "./MobileHomeView";

export default function Home() {
  const { screenSize } = useAppContext();
  return (
    <div>
      <BannerWrapper>
        <div className="searchwrapper">
          <div className="input-search">
            <input
              type="text"
              placeholder="Search by keyword, name, brand........"
            />
            <div className="search">
              <FaSearch fontSize={20} />
            </div>
          </div>
          <div className="qrcode">
            <img src={qr} alt="" />
          </div>
        </div>
      </BannerWrapper>
      <div>
        {screenSize <= 900 ? (
          <MobileHomeView />
        ) : (
          <>
            <PageWrapper>
              <SideMenu
                multipleRange={<MultipleRange />}
                category={<SideCategory routes={routes} heading="Category" />}
                popularCategory={
                  <SideCategory
                    routes={popularRoutes}
                    heading="Popular Category"
                  />
                }
              />
              <Fullbar>
                <PopularAds />
                <br />
                <br />
                <TopAds />
              </Fullbar>
            </PageWrapper>
            <br />
            <br />
            <TrendingPost />
          </>
        )}
      </div>
    </div>
  );
}

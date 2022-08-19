import React from "react";
import AdsHeading from "../../components/heading/Heading";
import categoryData from "../../servicesIcons";
import { CategoryRoutes, MobileHomeViewWrapper } from "./style";

export default function MobileHomeView() {
  return (
    <>
      <div style={{ marginTop: "30px", paddingLeft: "10px" }}>
        <AdsHeading headerName="Category" />
      </div>
      <MobileHomeViewWrapper>
        {categoryData.map((item: any) => (
          <CategoryRoutes to={item.link}>
            <div className="iconWrapper">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.name}</h3>
          </CategoryRoutes>
        ))}
      </MobileHomeViewWrapper>
    </>
  );
}

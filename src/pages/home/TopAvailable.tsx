import React from "react";
import AdItem from "../../components/adItem/AdItem";
import AdsHeading from "../../components/heading/Heading";
import { topAvailable } from "../../data";
import { AdsItemWrapper } from "./style";

export default function TopAds() {
  return (
    <>
      <AdsHeading headerName="Top Ads" />
      <AdsItemWrapper>
        {topAvailable?.map((items: any) => (
          <AdItem item={items} />
        ))}
      </AdsItemWrapper>
    </>
  );
}

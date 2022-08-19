import React from "react";
import AdItem from "../../components/adItem/AdItem";
import AdsHeading from "../../components/heading/Heading";
import { popularAds } from "../../data";
import { AdsItemWrapper } from "./style";

export default function PopularAds() {
  return (
    <>
      <AdsHeading headerName="Popular Ads" />
      <AdsItemWrapper>
        {popularAds?.map((items: any) => (
          <AdItem item={items} />
        ))}
      </AdsItemWrapper>
    </>
  );
}

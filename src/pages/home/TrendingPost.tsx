import React from "react";
import AdItem from "../../components/adItem/AdItem";
import AdsHeading from "../../components/heading/Heading";
import Pagination from "../../components/pagination/Pagination";
import { trendingPost } from "../../data";

export default function TrendingPost() {
  return (
    <div>
      <AdsHeading headerName="Trending" />
      {trendingPost.length > 0 ? (
        <Pagination
          data={trendingPost}
          RenderComponent={AdItem}
          pageLimit={10}
          dataLimit={5}
        />
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}

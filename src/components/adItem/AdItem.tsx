import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { formatter } from "../../utils";
import AdItemWrapper from "./style";

function AdItem({ item }: any) {
  return (
    <AdItemWrapper key={item?.id}>
      <div className="img-holder">
        <img src={item?.image} alt="" />
      </div>
      <div className="aditem-text">
        <h4 className="item-name">{item?.name}</h4>
        <div className="rating">
          <DynamicStar
            totalStars={5}
            rating={item?.rating}
            width={13}
            height={12}
            emptyStarColor="#E4E4E4"
            fullStarColor="#FF9017"
          />
          <h4 className="item-rating">{item?.rating}</h4>
        </div>

        <h2 className="price">
          {item?.currency} {formatter.format(item?.amount)}
        </h2>
      </div>
    </AdItemWrapper>
  );
}

export default AdItem;

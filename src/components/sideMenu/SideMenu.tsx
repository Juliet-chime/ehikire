import React from "react";
import { FaTimes } from "react-icons/fa";
import { SideBarWrapper } from "./style";
import { useAppContext } from "../../context";
import { SideBarProps } from "./sidebarTypes";

export default function SideMenu({
  category,
  multipleRange,
  location,
  clearFilter,
  productType,
  popularCategory,
  squareMeter,
  jobtype,
  yearOfManufacture,
  condition,
  fuel,
  maker,
  clotheRange,
  qualities,
  price,
}: SideBarProps) {
  const { active, setActive, screenSize } = useAppContext();

  const handleClose = () => {
    if (active && screenSize <= 900) {
      setActive(false);
    }
  };
  return (
    <div>
      {active && (
        <SideBarWrapper active={active}>
          <div className="timesicon">
            <FaTimes onClick={handleClose} cursor="pointer" />
          </div>
          <div>{multipleRange && <div>{multipleRange}</div>}</div>
          <div>{category && <div>{category}</div>}</div>
          <div style={{ marginTop: "30px" }}>
            {popularCategory && <div>{popularCategory}</div>}
          </div>
          <div>{price && <div>{price}</div>}</div>
          <div>{location && <div>{location}</div>}</div>
          <div>{productType && <div>{productType}</div>}</div>
          <div>{squareMeter && <div>{squareMeter}</div>}</div>
          <div>{condition && <div>{condition}</div>}</div>
          <div>{fuel && <div>{fuel}</div>}</div>
          <div>{maker && <div>{maker}</div>}</div>
          <div>{yearOfManufacture && <div>{yearOfManufacture}</div>}</div>
          <div>{jobtype && <div>{jobtype}</div>}</div>
          <div>{clotheRange && <div>{clotheRange}</div>}</div>
          <div>{qualities && <div>{qualities}</div>}</div>
          <div>{clearFilter && <div>{clearFilter}</div>}</div>
        </SideBarWrapper>
      )}
    </div>
  );
}

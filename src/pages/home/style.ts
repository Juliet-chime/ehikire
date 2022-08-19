import styled from "styled-components";
import { NavLink } from "react-router-dom";
import banner from "../../assest/images/picture/banner.png";

export const BannerWrapper = styled.section`
  background-image: url(${banner});
  background-position: center 5px 7px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  height: 348px;
  .searchwrapper {
    width: 600px;
    margin-top: 10px;
    position: relative;
    @media (max-width: 768px) {
      width: 90%;
    }
    .input-search {
      display: flex;
      input {
        width: 90%;
        border: 1px solid #e4e4e4;
        background-color: white;
        border-radius: 8px 0px 0px 8px;
        ::placeholder {
          color: #464646;
          padding-left: 15px;
        }
        &:focus {
          outline: none;
        }
      }
      .search {
        width: 55px;
        height: 50px;
        border-radius: 0px 8px 8px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9d342;
        border: 1px solid #3167eb;
      }
    }
    .qrcode {
      position: absolute;
      right: 80px;
      top: 10px;
      width: 35px;
      height: 35px;
      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
        right: 53px;
        top: 15px;
      }
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    background-position: center center;
    height: 200px;
  }
`;

export const AdsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 74px;
`;

export const MobileHomeViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0px 10px;
`;

export const CategoryRoutes = styled(NavLink)`
  width: 60px;
  text-align: center;
  text-decoration: none;
  .iconWrapper {
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(20 33 61 / 16%) 0px 2px 4px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 80px;
    height: 70px;
    cursor: pointer;
  }
  h3 {
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    color: black;
    margin: 10px 0px;
  }
`;

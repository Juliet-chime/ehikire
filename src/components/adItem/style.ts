import styled from "styled-components";

const AdItemWrapper = styled.div`
  padding: 15px 0px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 15px;
  letter-spacing: -0.2px;
  font-weight: 400;
  line-height: 22px;

  .img-holder {
    width: 150px;
    height: 160px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .aditem-text {
    padding: 17px 20px 0px 20px;
    border-top: 1px solid #e0e0e0;
    .rating {
      display: flex;
      align-items: center;
      gap: 7px;
      h4 {
        font-size: 13px;
        color: #969696;
        line-height: 18px;
      }
    }
    .item-name {
      color: #545454;
      font-size: 15px;
    }
    .price {
      color: #1c1c1c;
      font-weight: 600;
      font-size: 15px;
      margin-top: 5px;
    }
  }
`;

export default AdItemWrapper;

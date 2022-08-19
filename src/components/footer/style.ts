import styled from "styled-components";

export const FooterWrapper = styled.div`
  .downloadapp {
    display: flex;
    margin-top: 46px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 200px 66px 200px;
    @media (max-width: 768px) {
      padding: 20px 30px 30px 30px;
      gap: 20px;
    }
    h1 {
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      color: #111111;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 15px;
      }
    }

    .appStoreIcons {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    img {
      width: 122px;
      @media (max-width: 768px) {
        width: 50%;
      }
    }
  }

  .foooter-menu-reserve {
    background: #f6f6f6;
    border: 1px solid #e0e0e0;
    .footerMenu {
      display: flex;
      justify-content: space-between;
      padding: 30px 200px 47px 200px;
      @media (max-width: 768px) {
        padding: 10px 30px;
        flex-wrap: wrap;
      }
      .footerMenuItem {
        width: 130px;
        h2 {
          margin-left: 13px;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: -0.1px;
          color: #1c1c1c;
        }
        ul {
          list-style: none;
          padding: 0px;
          padding-left: 10px;
          li {
            margin-bottom: 10px;
            a {
              display: flex;
              align-items: center;
              text-decoration: none;
              font-weight: 400;
              font-size: 15px;
              line-height: 22px;
              letter-spacing: -0.2px;
              color: #545454;
              img {
                margin-right: 5px;
                @media (max-width: 768px) {
                  width: 15px;
                }
              }
              &:hover {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.5);
                transition: 2s linear;
              }
            }
          }
        }
      }
    }
  }
  .footer-reserved {
    padding: 22px 200px 31px 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      padding: 20px 10px;
      flex-wrap: wrap;
    }
    h3 {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.1px;
      color: #969696;
      @media (max-width: 768px) {
        margin-bottom: 5px;
      }
    }
    .paymentoptions {
      display: flex;
      gap: 10px;
      img {
        width: 34px;
      }
    }
  }
`;

export const Foot = styled.div`
  border: solid;
`;

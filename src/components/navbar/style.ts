import styled from "styled-components";

// navbar style

export const NavBarWrapper = styled.div`
  /* position: fixed;
  width: 100%;
  left: 0px;
  z-index: 99999; */
  /* border: solid; */
`;

// navsocial style

export const NavSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 200px;
  background: #f9d342;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  @media (max-width: 768px) {
    gap: 5px;
  }
  a {
    @media (max-width: 768px) {
      width: 15px;
    }
    &:hover {
      transform: translate(1px, 2px);
      transition: 2s linear;
    }
  }
`;

export const SellWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const Sell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 120px;
  border: 1px solid #3167eb;
  border-radius: 6px;
  padding: 0.5rem 6rem 0.5rem 0.7rem;
  h2 {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.1px;
  }
`;

export const Language = styled.div`
  margin-top: -10px;
  display: flex;
  align-items: center;
  select {
    background-color: transparent;
    font: inherit;
    display: flex;
    align-items: center;
    padding: 0.5em 2.5em 0.5em 1em;
    /* reset */
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-image: linear-gradient(45deg, transparent 50%, black 50%),
      linear-gradient(135deg, black 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 0px),
      calc(100% - 15px) calc(1em + 0px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 0px 1.5em;
    background-repeat: no-repeat;
    &:focus {
      background-image: linear-gradient(45deg, black 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, black 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 0px 1.5em;
      background-repeat: no-repeat;
      outline: 0;
    }
  }
`;

// navsocial profile

export const NavProfileWrapper = styled.div`
  padding: 0px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  @media (max-width: 768px) {
    justify-content: space-around;
    background-color: #e5e5e5;
  }
  .logo {
    width: 60px;
    height: 60px;
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
    img {
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .hub {
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: -0.115385px;
    @media (max-width: 768px) {
      font-size: 12px;
      max-width: 100px;
      line-height: 16px;
    }
  }
  .cart-signin {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      gap: 10px;
    }
    .cart {
      width: 30px;
      height: 30px;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid #dedede;
      @media (max-width: 768px) {
        width: 28px;
        height: 28px;
      }
      img {
        width: 50%;
      }
      p {
        position: absolute;
        background: #fa3434;
        border-radius: 14px;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -8px;
        font-size: 12px;
        right: -5px;
        color: white;
        @media (max-width: 768px) {
          width: 15px;
          height: 15px;
          font-size: 10px;
        }
      }
    }
    .signin {
      display: flex;
      align-items: center;
      gap: 10px;
      .signintextholder {
        .signintext {
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: -0.1px;
          color: #969696;
          @media (max-width: 768px) {
            font-size: 10px;
          }
        }
        .myaccount {
          font-weight: 400;
          font-size: 11px;
          line-height: 22px;
          letter-spacing: -0.2px;
          color: #545454;
          @media (max-width: 768px) {
            font-size: 10px;
          }
          button {
            background-color: transparent;
            border: none;
            color: #969696;
            cursor: pointer;
            @media (max-width: 768px) {
              font-size: 10px;
            }
          }
        }
      }
      .showprofilemenu {
        position: absolute;
        width: 230px;
        background: #fafafa;
        z-index: 99999999;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1),
          0px 3px 10px rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        @media (max-width: 768px) {
          right: 20px;
          width: 50%;
        }
        ul {
          list-style: none;
          li {
            margin-bottom: 8px;
            a {
              text-decoration: none;
              font-style: normal;
              font-weight: 600;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: -0.115385px;
              color: #111111;
              margin-bottom: 5px;
              @media (max-width: 768px) {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;

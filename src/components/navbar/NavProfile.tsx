import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { NavProfileWrapper } from "./style";
import logo from "../../assest/images/picture/ekiLogo.png";
import cart from "../../assest/images/icons/cart.png";
import person from "../../assest/images/icons/person icon.png";

function NavProfile() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const showProfile = () => {
    setShowProfileMenu((prev) => !prev);
  };
  return (
    <NavProfileWrapper>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <h3 className="hub">The Hub of Consumer Satisfaction</h3>
      </div>
      <div>
        <div className="cart-signin">
          <div className="cart">
            <img src={cart} alt="" />
            <p>5</p>
          </div>
          <div className="signin">
            <div className="cart">
              <img src={person} alt="" />
            </div>
            <div className="signintextholder">
              <h3 className="signintext">Sign In / Sign Up</h3>
              <h3 className="myaccount">
                My Account
                <button onClick={showProfile} type="button">
                  {showProfileMenu ? <FaCaretUp /> : <FaCaretDown />}
                </button>
              </h3>
              {showProfileMenu && (
                <div className="showprofilemenu">
                  <ul>
                    <li>
                      <a href="https://google.com">My Profile</a>
                    </li>
                    <li>
                      <a href="https://google.com">Messages/Notification</a>
                    </li>
                    <li>
                      <a href="https://google.com">Statistics</a>
                    </li>
                    <li>
                      <a href="https://google.com">EkiHire</a>
                    </li>
                    <li>
                      <a href="https://google.com">Sign out</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </NavProfileWrapper>
  );
}

export default NavProfile;

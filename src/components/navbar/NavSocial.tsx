import React from "react";
import twitter from "../../assest/images/icons/Twitter.png";
import facebook from "../../assest/images/icons/Facebook.png";
import instagram from "../../assest/images/icons/Instagram.png";
import flag from "../../assest/images/icons/flag.png";
import block from "../../assest/images/icons/block.png";

import {
  Language,
  NavSocialWrapper,
  Sell,
  SellWrapper,
  SocialIconWrapper,
} from "./style";

function NavSocial() {
  return (
    <NavSocialWrapper>
      <SocialIconWrapper>
        <a href="https://google.com">
          <img src={twitter} alt="twitter" />
        </a>

        <a href="https://google.com">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://google.com">
          <img src={facebook} alt="facebook" />
        </a>
      </SocialIconWrapper>
      <SellWrapper>
        <Sell>
          <img src={block} alt="block" />
          <h2>SELL</h2>
        </Sell>
        <Language>
          <select>
            <option>Language</option>
            <option value="">English</option>
          </select>
          <span>
            <img src={flag} alt="flag" />
          </span>
        </Language>
      </SellWrapper>
    </NavSocialWrapper>
  );
}

export default NavSocial;

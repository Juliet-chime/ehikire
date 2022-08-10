import React from "react";
import { NavLink } from "react-router-dom";
import appStore from "../../assest/images/picture/appStore.png";
import googlePlay from "../../assest/images/picture/googlePlay.png";
import { FooterWrapper } from "./style";
import facebook from "../../assest/images/icons/Facebook.png";
import instagram from "../../assest/images/icons/Instagram.png";
import twitter from "../../assest/images/icons/Twitter.png";
import youtube from "../../assest/images/icons/youtube.png";
import linkedin from "../../assest/images/icons/linkedin.png";
import americaExpress from "../../assest/images/picture/americaExpress.png";
import mastercard from "../../assest/images/picture/mastercard.png";
import visa from "../../assest/images/picture/Visa.png";
import paypal from "../../assest/images/picture/paypal.png";

function Footer() {
  return (
    <FooterWrapper>
      <div className="downloadapp">
        <div>
          <h1>Download EkiHire Mobile App</h1>
        </div>
        <div className="appStoreIcons">
          <img src={appStore} alt="appStore" />
          <img src={googlePlay} alt="googlePlay" />
        </div>
      </div>

      <div className="foooter-menu-reserve">
        <div className="footerMenu">
          <div className="footerMenuItem">
            <h2>Company</h2>
            <ul>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/sell">Sell</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li>
                <NavLink to="/sitemap">Sitemap</NavLink>
              </li>
              <li>
                <NavLink to="/billing">Billing Policy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h2>Help</h2>
            <ul>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms &amp; Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/safety">Saftey Tips</NavLink>
              </li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h2>About</h2>
            <ul>
              <li>
                <NavLink to="/about">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sell">Register</NavLink>
              </li>
              <li>
                <NavLink to="/career">Account Setting</NavLink>
              </li>
              <li>
                <NavLink to="/sitemap">Basket</NavLink>
              </li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h2>Social</h2>
            <ul>
              <li>
                <a href="https://google.com">
                  <img src={facebook} alt="" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src={twitter} alt="" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src={instagram} alt="" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src={youtube} alt="" /> Youtube
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <img src={linkedin} alt="" /> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-reserved">
        <h3>© 2021 EkiHire. All rights reserved.</h3>

        <h3>info@Ekihire.com</h3>

        <h3>Head Office: Plot 60, Fola Mall, Ikeja, Lagos State</h3>

        <div className="paymentoptions">
          <img src={americaExpress} alt="" />
          <img src={mastercard} alt="" />
          <img src={paypal} alt="" />
          <img src={visa} alt="" />
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import WhatsappIcon from "../assets/svg_icons/whatsapp";
import InstagramIcon from "../assets/svg_icons/instagram";
import TelegramIcon from "../assets/svg_icons/telegram";
import VKIcon from "../assets/svg_icons/vk";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="">What is our company</a>
              </li>
              <li>
                <a href="">What is the work strategy </a>
              </li>
              <li>
                <a href="">Why Choose us</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="">Sales Abroad</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Advertising</a>
              </li>
              <li>
                <a href="">Analyse</a>
              </li>
              <li>
                <a href="">Branding</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>follow us</h4>
            <div className="icon__container">
              <a className="icon__footer" href={ROUTES.SOCIAL_LINK_WHATSAPP}>
                <WhatsappIcon />
              </a>
              {/* <a className="icon__footer" href={ROUTES.SOCIAL_LINK_INSTAGRAM}>
                <InstagramIcon />
              </a> */}
              <a className="icon__footer" href={ROUTES.SOCIAL_LINK_TELEGRAM}>
                <TelegramIcon />
              </a>
              <a className="icon__footer" href={ROUTES.SOCIAL_LINK_VK}>
                <VKIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

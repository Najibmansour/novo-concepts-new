import React, { useState } from "react";
import "./Header.css";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "../assets/svg_icons/instagram";
import VKIcon from "../assets/svg_icons/vk";
import WhatsappIcon from "../assets/svg_icons/whatsapp";
import TelegramIcon from "../assets/svg_icons/telegram";
const Header = () => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://i.imgur.com/u5Q5cJR.png"
            alt="Novo Designs"
            className="logo"
            onClick={() => navigate(ROUTES.HOME)}
          />
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className={'line ${menuOpen ? "open" : ""}'}></div>
          <div className={'line ${menuOpen ? "open" : ""}'}></div>
          <div className={'line ${menuOpen ? "open" : ""}'}></div>
        </div>
        <ul className={'navbar-links ${menuOpen ? "open" : ""}'}>
          {/* <li className="dropdown">
            About us
            <ul className="dropdown-menu">
              <li>Our Mission</li>
              <li>Our Team</li>
              <li>Careers</li>
            </ul>
          </li> */}

          <li onClick={() => navigate(ROUTES.SERVICES)} className="dropdown">
            Services
            {/* <ul className="dropdown-menu">
              <li>Web Development</li>
              <li>SEO</li>
              <li>Marketing</li>
            </ul> */}
          </li>
          <li
            onClick={() => navigate(ROUTES.CONTACT)}
            className="header_nav_text"
          >
            Contact us
          </li>
          {/* <div className="language-selector" onClick={toggleLanguageMenu}>
            <span className="language-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63616 2.6665 2.66663 8.63604 2.66663 15.9998C2.66663 23.3636 8.63616 29.3332 16 29.3332Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66663 16H29.3333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2.6665C19.335 6.31764 21.2303 11.0559 21.3333 15.9998C21.2303 20.9438 19.335 25.682 16 29.3332C12.6649 25.682 10.7696 20.9438 10.6666 15.9998C10.7696 11.0559 12.6649 6.31764 16 2.6665V2.6665Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            En
            {languageMenuOpen && (
              <ul className="language-menu">
                <li onClick={() => setLanguageMenuOpen(false)}>En</li>
                <li onClick={() => setLanguageMenuOpen(false)}>Fr</li>
                <li onClick={() => setLanguageMenuOpen(false)}>AR</li>
              </ul>
            )}
          </div> */}
        </ul>
        <div className="icon__flex__container ">
          <div className="icon__container">
            <a className="icon" href={ROUTES.SOCIAL_LINK_WHATSAPP}>
              <WhatsappIcon />
            </a>
            <a className="icon" href={ROUTES.SOCIAL_LINK_INSTAGRAM}>
              <InstagramIcon />
            </a>
            <a className="icon" href={ROUTES.SOCIAL_LINK_TELEGRAM}>
              <TelegramIcon />
            </a>
            <a className="icon" href={ROUTES.SOCIAL_LINK_VK}>
              <VKIcon />
            </a>
          </div>
        </div>
      </nav>
      <div className="spacer">
        <svg
          className="spacer"
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="2"
          viewBox="0 0 1920 2"
          fill="none"
        >
          <path d="M-3 1L1926 1.00017" stroke="white" stroke-width="0.5" />
        </svg>
      </div>
    </>
  );
};

export default Header;

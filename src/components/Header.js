import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <Link to="/">
          <div className="header__icon header__icon--active">
            <HomeIcon />
            <p>Inicio</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="header__icon">
            <PersonIcon />
            <p>Sobre mí</p>
          </div>
        </Link>
        <Link to="/portafolio">
          <div className="header__icon">
            <FolderSpecialIcon />
            <p>Portafolio</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="header__icon">
            <ContactMailIcon />
            <p>Contacto</p>
          </div>
        </Link>
      </div>
      <div className="header__name">
        <Link to="/">
          <div class="play-btn">
            <div class="play-btn-inner">
              <small>
                <b>AP</b>
              </small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

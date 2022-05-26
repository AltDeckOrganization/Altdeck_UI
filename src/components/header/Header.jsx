import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
// import { greeting } from "./Portfolio.js";
import "./Header.css";
import Logo from "../../images/logo.jpeg";

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

function Header() {
  // const theme = this.props.theme;
  // console.log(theme);
  // const link = settings.isSplash ? "/splash" : "home";
  return (
    <div>
      <nav className="header">
        <Link to="/" tag={Link}>
          <span>
            <img className="logo" src={Logo} />
          </span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="/promotionPage"
              activestyle={{ fontWeight: "bold" }}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Promotion
            </Link>
          </li>
          <li>
            <Link
              to="/addNewToken"
              activestyle={{ fontWeight: "bold" }}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Add Token
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

// <div>
// <nav className="header">
//   <Link to="/" tag={Link} className="logo">
//     <span className="logo-name">AltDeck</span>
//   </Link>
//   <input className="menu-btn" type="checkbox" id="menu-btn" />
//   <label className="menu-icon" htmlFor="menu-btn">
//     <span className="navicon"></span>
//   </label>
//   <ul className="menu">
//     <li>
//       <Link
//         to="/addNewToken"
//         tag={Link}
//         activestyle={{ fontWeight: "bold" }}
//         style={{ color: theme.text }}
//         onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//         onMouseOut={(event) => onMouseOut(event)}
//       >
//         Add New Token
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/pormotionPage"

//         activestyle={{ fontWeight: "bold" }}
//         style={{ color: theme.text }}
//         onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
//         onMouseOut={(event) => onMouseOut(event)}
//       >
//         Pormotion Page
//       </Link>
//     </li>
//   </ul>
// </nav>
// </div>

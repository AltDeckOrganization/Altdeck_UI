import React, { Component, useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
// import { greeting } from "./Portfolio.js";
import "./Header.css";
import SearchToken from "../../pages/home/coins/SearchToken";
import Logo from "../../images/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   marginTop: 5,
//   width: "360px",
//   [theme.breakpoints.down("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "200px",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     // [theme.breakpoints.up("sm")]: {
//     //   width: "12ch",
//     //   "&:focus": {
//     //     width: "20ch",
//     //   },
//     // },
//   },
// }));
function Header({ tokens, findToken }) {
  // const [searchValue, setSearchValue] = useState("");
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
          {/* <li>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn-submit"
                type="button"
                onClick={() => findToken(searchValue)}
              >
                {" "}
                Search
              </button>
            </Search> */}
          {/* <form action="/action_page.php">
              <form>
                <input type="search" placeholder="Search..." />
                <button type="submit">
                  {" "}
                  <SearchIcon />
                </button>
              </form>
            </form> */}
          {/* </li> */}
          <li>
              <SearchToken tokens={tokens} />
          </li>
          {/* <li>
            <Link
              to="/promotionPage"
              activeStyle={{ fontWeight: "bold" }}
              onMouseOut={(event) => onMouseOut(event)}
            >
              Promotion
            </Link>
          </li> */}
          <li>
            <Link
              to="/addNewToken"
              activeStyle={{ fontWeight: "bold" }}
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
//         activeStyle={{ fontWeight: "bold" }}
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

//         activeStyle={{ fontWeight: "bold" }}
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

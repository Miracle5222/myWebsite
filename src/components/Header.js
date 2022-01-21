import React from "react";
import { Link } from "react-router-dom";
import { Headers, Light } from "./styles/Header.styled";

import logo from "../Images/logo.svg";
import moon from "../Images/moon.svg";
import sun from "../Images/sun.svg";


import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../actions";
import { Logo } from "./styles/Logo.styled";

function Header() {
  const color = useSelector(({ darkMode }) => darkMode);
  const dispatch = useDispatch();

  const colorMode = () => {
    dispatch(darkMode());
  };

  return (
    <>
      <Headers justify="space-between" align="center">
        <Logo>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/about">ABOUT</Link>
        </nav>

        <Light>
          <button onClick={colorMode}>
            {color ? (
              <img src={sun} alt="sun" />
            ) : (
              <img src={moon} alt="moon" />
            )}
          </button>
        </Light>
      </Headers>
    </>
  );
}

export default Header;

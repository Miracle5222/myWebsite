import React from "react";
import { Link } from "react-router-dom";
import { Headers } from "./styles/Header.styled";
import { Light, Moon, Sun } from "./styles/Container.styled";

import logo from "../Images/logo.svg";
import moon from "../Images/moon.svg";
import sun from "../Images/sun.svg";

import { useSelector } from "react-redux";
const light = useSelector(({darkMode})=> darkMode)

function Header() {
  return (
    <>
      <Headers justify="center" align="center">
        <Link to="/">HOME</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <img src={logo} alt="logo" />
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>

        <Light>
          <img src={moon} alt="moon" />
        </Light>
      </Headers>
    </>
  );
}

export default Header;

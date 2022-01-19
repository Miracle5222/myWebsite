import React from "react";
import { useDispatch } from "react-redux";
import { darkMode } from "../actions";
import { Headers } from "./styles/Header.styled";
import logo from "../Images/logo.svg";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <Headers justify="center" align="center">
        <nav>
          <a>HOME</a>
          <a>HOME</a>
          <img src={logo} alt="Logo"></img>
          <a>HOME</a>
          <a>HOME</a>
              </nav>
              <div>
                  <p>lights</p>
              </div>
      </Headers>
    </>
  );
}

export default Header;

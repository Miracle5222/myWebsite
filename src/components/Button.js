import React from "react";
import { useDispatch } from "react-redux";
import { darkMode } from "../actions";
import { SButton } from "./styles/Buttons.styled.js";

function Button() {
  const dispatch = useDispatch();

  useDispatch(darkMode());

  return (
    <>
      <SButton onClick={() => dispatch(darkMode())} bg="#141414">
        click me
      </SButton>
    </>
  );
}

export default Button;

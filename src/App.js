import React from "react";
import { useSelector } from "react-redux";

import { GlobalStyles } from "./components/Global.styled";
import { Container } from "./components/styles/Container.styled";
import Button from "./components/Button";

function App() {
  const counter = useSelector((state) => state.counter);
  const colorMode = useSelector((state) => state.darkMode);

  return (
    <Container
      justify="center"
      align="center"
      bg={colorMode ? "DDDDDD" : "#001F1F"}
    >
      <GlobalStyles />
      <div>{colorMode ? <p>True</p> : <p>False</p>}</div>
      <Button />
    </Container>
  );
}

export default App;

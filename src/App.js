import React from "react";
import { useSelector } from "react-redux";
import { SubContainer } from "./components/styles/Container.styled";
import { Head } from "./components/styles/Main.styled";

function App() {
  const colorMode = useSelector((state) => state.darkMode);

  return (
    <>
      <SubContainer bg={colorMode ? "#FFFFFF" : "#001015"}>
        <Head >
          <h1>Hi, I'm Neil</h1>
          <p>Graphic Designer | Web Developer</p>
        </Head>
      </SubContainer>
    </>
  );
}

export default App;

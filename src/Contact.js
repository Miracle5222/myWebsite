import React from "react";
import { useSelector } from "react-redux";
import { SubContainer } from "./components/styles/Container.styled";
import { Head } from "./components/styles/Main.styled";

function Contact() {
  const colorMode = useSelector((state) => state.darkMode);

  return (
    <SubContainer bg={colorMode ? "#FFFFFF" : "#001015"}>
      <Head>
        <h1>Contact Page</h1>
      </Head>
    </SubContainer>
  );
}

export default Contact;

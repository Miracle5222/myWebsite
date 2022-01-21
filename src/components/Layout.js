import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./styles/Container.styled";

import { useSelector } from "react-redux";
import { GlobalStyles } from "./Global.styled";

function Layout({ children }) {
  const colorMode = useSelector((state) => state.darkMode);

  return (
    <>
      <Header />
      <GlobalStyles bg={colorMode ? "#001015" : "#FFFFFF"} />
      <Container
        justify="center"
        align="center"
        bg={colorMode ? "#E5E5E5" : "#011116"}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;

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
      <GlobalStyles />
      <Container
        justify="center"
        align="center"
        bg="#001015"
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;

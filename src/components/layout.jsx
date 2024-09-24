import { Fragment } from "react";
import * as React from "react";
import Seo from "./seo";
import Header from "./header";
import Footer from "./footer";
import Container from "./container.mjs";
import GlobalStyle from "./global-styles.mjs";
import styled from "styled-components";

const Layout = ({ children, title, description, socialImage = "" }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Seo title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }
`;

import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import LayoutContainer from "../components/container.js";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Head>
          <title>
            SecurePDF &mdash; Share with Care!
          </title>
        </Head>
        <Header />
        {children}
        <LayoutContainer>
        <br />
          <Footer />
        </LayoutContainer>
      </div>
    );
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

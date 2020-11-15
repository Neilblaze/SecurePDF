import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";


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
      </div>
    );
  }
}


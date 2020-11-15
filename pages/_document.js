import Document, { Html, Head, Main, NextScript } from "next/document";

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="SecurePDF adds an extra layer of security while sharing your valuable notes as pdf!"
          />
          <meta property="og:url" content="https://securepdf.vercel.app" />
          <meta property="og:site_name" content="SecurePDF" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="SecurePDF &mdash; Share with Care!"
          />
          <meta
            property="og:description"
            content="SecurePDF adds an extra layer of security while sharing your valuable notes as pdf!"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/Neilblaze/SecurePDF/images-vault/img_vault/screenshot.png"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="image_src"
            href="https://raw.githubusercontent.com/Neilblaze/SecurePDF/images-vault/img_vault/share_pdf.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link href="static/main.css" rel="stylesheet" type="text/css" />
          <link href="/static/main.css" rel="stylesheet" type="text/css" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <style jsx global>{``}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

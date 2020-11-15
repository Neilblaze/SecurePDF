import dynamic from 'next/dynamic';
import Button from "./button";

const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Nav() {
  return (
    <div className="hero">
      <style jsx>
        {`
          .hero {
            text-align: center;
            padding-top: 3rem;
          }

          .hero h1 {
            padding-top: 1.2rem;
            line-height: 2.3rem;
          }

          .hero p {
            margin: 1rem auto;
            max-width: 350px;
            line-height: 1.4rem;
            color: #808493;
          }

          @media only screen and (min-width: 768px) {
            .hero p {
              font-size: 1.4rem;
              font-weight: 300;
              line-height: 2.1rem;
              max-width: 550px;
              margin: 0 auto;
            }
          }
          .hero strong {
            color: #373a3c;
          }
          @media only screen and (max-width: 767px) {
            .hero {
              margin: 0;
            }
            .hero h1 {
              line-height: 2rem;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .hero .button {
            margin-top: 8px;
            margin-right: 10px;
          }

          @media only screen and (min-width: 768px) {
            .hero .button {
              margin: 20px 6px;
            }
          }
        `}
      </style>
      <img src="static/root.png" height="186" />
      <h1>
        {" "}
        <strong>SecurePDF</strong> —{" "}
        <span>
          Share with <nobr>Care!</nobr>
        </span>
      </h1>
      <p> 
        SecurePDF is an Android™ App which adds an extra layer of security while sharing your valuable notes as pdf.
      </p>
      <p>
        <Button href="#how-it-works">
          Learn how it works
        </Button>
      </p>
    </div>
  );
}

import dynamic from 'next/dynamic';

const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Install() {
  return (
    <>
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          p {
            margin: 1rem auto;
            max-width: 600px;
          }
        }

        @media only screen and (max-width: 768px) {
          .install-count {
            padding-left: 1em;
          }
        }
      `}</style>
      <p>
        SecurePDF is an Android™ App available for download for free! 
        <br />
        Supported across all devices running above Android™ 5 Lollipop.
      </p>
      <InstallButton />
    </>
  );
}

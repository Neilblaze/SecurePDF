import LanguageBox from "./LanguageBox";

export default function Languages() {
  return (
    <>
      <style jsx>{`
        .language-boxes {
          display: grid;
          grid-template-columns: repeat(3, auto);
          grid-gap: 15px;
          justify-content: center;
        }

        @media only screen and (min-width: 480px) {
          .language-boxes {
            grid-template-columns: repeat(4, auto);
          }
        }
      
        @media only screen and (min-width: 768px) {
          .language-boxes {
            grid-template-columns: repeat(5, auto);
          }
        }
      `}</style>
      <div className="language-boxes">
        <LanguageBox image="static/gcp.png" label="GCP" />
        <LanguageBox image="static/react.png" label="React.Js" />
        <LanguageBox image="static/next.png" label="NEXT.Js" />
        <LanguageBox image="static/jwt.png" label="JWT" />
        <LanguageBox image="static/sharp.png" label="Sharp" />
      </div>
    </>
  );
}

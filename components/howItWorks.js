export default function HowItWorks() {
  return (
    <>
      <style jsx>
        {`
          h3 span {
            background: #1565c0;
            width: 1.5em;
            height: 1.5em;
            line-height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            margin-right: 0.3em;
            margin-left: -0.3em;
            box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
            color: white;
          }
          @media only screen and (min-width: 768px) {
            .how-it-works-boxes {
              display: grid;
              grid-template-columns: auto auto auto;
              grid-gap: 30px;
            }

            a {
            text-decoration: none;
            style="color:blue;"
            }
          }
        `}
      </style>
      <div className="how-it-works-boxes">
        <div className="how-it-works-description">
          <h3>
            <span>1</span> Input
          </h3>
          <p>
            SecurePDF takes the pdf as input from the Admin.
          </p>
        </div>

        <div className="how-it-works-description">
          <h3>
            <span>2</span> Process
          </h3>
          <p>
            Upon taking the input the file is then proecessed through a <b>secret method</b> & the processed file is then stored in a .zip
          </p>
        </div>

        <div className="how-it-works-description">
          <h3>
            <span>3</span> Output
          </h3>
          <p>
            Upon successful processing of the file, the file can be opened by the {" "}
            <a href="gandu.bdsk/">Baal bichi</a>.{" "}
          </p>
          <p>
            Gand Marao
          </p>
        </div>
      </div>
    </>
  );
}

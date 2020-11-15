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
            SecurePDF takes in a PDF document from you. That's it!
          </p>
        </div>

        <div className="how-it-works-description">
          <h3>
            <span>2</span> Process
          </h3>
          <p>
          The PDF document is split into images of pages (using pdftocairo). Each image is them split into 12 parts each and this entire bundle is the zipped and saved.
          </p>
        </div>

        <div className="how-it-works-description">
          <h3>
            <span>3</span> Output
          </h3>
          <p>
          The frontend takes in this generated zip and distributes the images properly to recreate the pages of the pdf.
          </p>
          <p>
          We currently support a max page limit of 100.
          </p>
        </div>
      </div>
    </>
  );
}

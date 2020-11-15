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
        </div
      </div>
    </>
  );
}

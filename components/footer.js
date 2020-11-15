export default function Footer() {
  return (
    <div className="footer">
      <style jsx>
        {`
          .footer {
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 40px;
          }

          .footer-logo {
            margin: 20px 0 50px;
          }

          .footer a {
            color: #373a3a;
          }

          .note {
            font-size: 0.8rem;
            line-height: 1.2rem;
            color: #999;
          }

          @media only screen and (max-width: 767px) {
            .footer {
              margin-bottom: 50px;
            }

            .footer a {
              margin-left: 15px;
            }

            .footer-logo {
              margin-bottom: 30px;
            }
          }

          @media only screen and (min-width: 768px) {
            .footer {
              margin: 1rem 0;
            }

            .footer a {
              display: inline;
              margin-right: 0;
              margin-left: 20px;
            }

            .microspace {}
          }
        `}
      </style>
      <span>&copy; SecurePDF 2020</span>
{/*       <Link href="/privacy">
        <a>Privacy</a>
      </Link> */}
{/*       <a href="https://github.com/Neilblaze/SecurePDF">GitHub</a> */}
 

      <div className="note">
        Crafted with ❤️ for <a class="microspace" href="https://google.com">Def Hacks | GLOBAL 2.0</a> by <a class="microspace" href="https://github.com/Neilblaze">Pratyay</a>, <a class="microspace" href="https://github.com/sandipndev">Sandipan</a> & <a class="microspace" href="https://github.com/fias786">Saif</a>
        <br />
      </div>
    </div>
  );
}

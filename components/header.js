import Link from "next/link";
import dynamic from 'next/dynamic';
import Container from "./container";
import HideOnMobile from "./hide-on-mobile";

const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Nav() {
  return (
    <HideOnMobile>
            <style jsx>
        {`
          .nav-box {
            box-shadow: 0px 0px 3px 0px rgba(40, 40, 40, 0.4);
          }

          .nav {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
            padding-top: 27px;
            padding-bottom: 15px;
          }

          .nav-item {
            cursor: pointer;
            font-size: 12px;
            line-height: 46px;

            font-weight: 700;
            margin: 0 19px;
            text-decoration: none;
            text-transform: uppercase;
            color: #1c1f2b;
          }

          .nav-item:first-child {
            margin-left: 0;
          }

          .nav-item:hover {
            border-bottom: 2px solid #1c1f2b;
          }

          .right {
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: space-between;
            align-items: center;
          }

        `}
      </style>
      <div className="nav-box hide-on-mobile">
        <Container>
          <nav className="nav">
            <div className="nav-menu-wrapper">
              <Link href="/#how-it-works">
                <span className="nav-item">
                  How it works?
                </span>
              </Link>
            </div>
            <div className="right">
              <InstallButton compact={true} />
            </div>
          </nav>
        </Container>
      </div>
    </HideOnMobile>
  );
}

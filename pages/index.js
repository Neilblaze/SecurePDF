import Container from "../components/container";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
import Story from "../components/story";
import Screenshot from "../components/screenshot";
import Mainlogo from "../components/mainlogo";
import Languages from "../components/Languages";

function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Screenshot />
      </Container>
      <Container colored={true}>
        <h1 id="environments">Tech Stack</h1>
        <Languages />
      </Container>
      <Container >
        <h1 id="how-it-works">How it works</h1>
        <HowItWorks />
        <br />
        <hr />
        <h1 id="how-it-works">Story behind SecurePDF</h1>
        <Story />
        <Mainlogo src="static/download_btn.png" width="205" />
      </Container>
      <Container>
        <Mainlogo src="https://www.netlify.com/img/global/badges/netlify-dark.svg" />
      </Container>
    </>
  );
}

export default Home;

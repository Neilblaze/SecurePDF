import Container from "../components/container";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
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
        <Mainlogo src="static/download_btn.png" width="205" />
      </Container>
      <Container>
        <Mainlogo src="static/vercel-logo.png" width="205" />
      </Container>
    </>
  );
}

export default Home;

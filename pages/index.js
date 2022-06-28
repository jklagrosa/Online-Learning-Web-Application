import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import OverAll from "../components/OverAll";
import GetStarted from "../components/GetStarted";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <GetStarted />
      <OverAll />
      <Events />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
}

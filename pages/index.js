import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Featured />
      <GetStarted />
      <Events />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
}

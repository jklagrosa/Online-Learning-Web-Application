import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";
import Latest from "../components/Latest";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Latest />
      <GetStarted />
      <Featured />
      <Events />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
}

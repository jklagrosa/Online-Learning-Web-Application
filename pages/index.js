import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <GetStarted />
      <Events />
      <Footer />
      <Copyright />
    </>
  );
}

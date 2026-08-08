import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

function Home({ onLogin }) {
  return (
    <>
      <Navbar onLogin={onLogin} />
      <Hero onLogin={onLogin} />
      <FeatureCard />
      <Footer />
    </>
  );
}

export default Home;
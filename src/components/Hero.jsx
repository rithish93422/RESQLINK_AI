import hero from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Stay Connected
          <br />
          Even When Networks Fail
        </h1>

        <h2>
          AI-Powered Hybrid Emergency Communication System
        </h2>

        <p>
          ResQLink AI intelligently selects the most reliable
          communication network available, ensuring uninterrupted
          connectivity during disasters, emergencies and remote
          operations.
        </p>

        <button className="start-btn">
          Get Started
        </button>

      </div>

      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;
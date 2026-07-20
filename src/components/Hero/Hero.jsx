import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Future of Hiring
          <br />
          Starts Here
        </h1>

        <p>
          Meet Aura, your AI Recruitment Assistant that helps
          candidates prepare smarter and companies hire better.
        </p>

        <div className="hero-buttons">
          <button>Upload Resume</button>
          <button>Talk to Aura</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="ai-circle">🤖</div>
      </div>
    </section>
  );
}

export default Hero;
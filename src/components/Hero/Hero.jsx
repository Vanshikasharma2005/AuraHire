import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Build Your Career With AuraHire AI
        </h1>

        <p>
          Build a stronger career profile with AI-powered resume improvement,
          skill analysis, and personalized career guidance.
        </p>


        <div className="hero-buttons">

          <Link to="/register">
            <button>
              Get Started
            </button>
          </Link>


          <Link to="/register">
            <button>
              Improve My Profile
            </button>
          </Link>

        </div>

      </div>


    </section>
  );
}

export default Hero;
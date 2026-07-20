import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>AuraHire</h2>
          <p>
            AI powered recruitment assistant helping candidates
            prepare smarter and companies hire better.
          </p>
        </div>


        <div className="footer-links">
          <h3>Explore</h3>
          <p>Home</p>
          <p>Dashboard</p>
          <p>Interview</p>
          <p>Roadmap</p>
        </div>


        <div className="footer-links">
          <h3>Connect</h3>
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Contact</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © 2026 AuraHire. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
import "./Features.css";
import { FileText, Target, Mic, Map } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <FileText size={40} />,
      title: "AI Resume Analysis",
      description:
        "Upload your resume and receive intelligent feedback to improve it."
    },
    {
      icon: <Target size={40} />,
      title: "ATS Score",
      description:
        "Know how well your resume performs with Applicant Tracking Systems."
    },
    {
      icon: <Mic size={40} />,
      title: "Mock Interview",
      description:
        "Practice interview questions with Aura and improve your confidence."
    },
    {
      icon: <Map size={40} />,
      title: "Career Roadmap",
      description:
        "Get a personalized learning path based on your career goals."
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose AuraHire?</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import AIAssistant from "../components/AIAssistant/AIAssistant";
import CareerDashboard from "../components/CareerDashboard/CareerDashboard";
import WhyAuraHire from "../components/WhyAuraHire/WhyAuraHire";
import Footer from "../components/Footer/Footer";


function Home() {

  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <AIAssistant />

      <CareerDashboard />

      <WhyAuraHire />

      <Footer />

    </>
  );
}


export default Home;
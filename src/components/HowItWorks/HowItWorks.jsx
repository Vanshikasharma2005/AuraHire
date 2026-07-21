function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Upload Your Profile",
      description:
        "Add your resume, skills, projects, and career goals to start your AI analysis."
    },
    {
      number: "02",
      title: "AI Profile Analysis",
      description:
        "AuraHire analyzes your resume and identifies strengths, weaknesses, and opportunities."
    },
    {
      number: "03",
      title: "Get Smart Suggestions",
      description:
        "Receive personalized recommendations to improve your skills and professional profile."
    },
    {
      number: "04",
      title: "Become Job Ready",
      description:
        "Build confidence with better resumes, skills, and interview preparation."
    }
  ];


  return (
    <section className="bg-black text-white px-10 py-20">

      <h2 className="text-4xl font-bold text-center">
        How AuraHire AI Works
      </h2>

      <p className="text-gray-400 text-center mt-4">
        A simple AI-powered journey to improve your career profile.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

        {
          steps.map((step,index)=>(

            <div
              key={index}
              className="
              bg-white/10
              rounded-2xl
              p-6
              border
              border-purple-500/30
              "
            >

              <h3 className="text-purple-400 text-3xl font-bold">
                {step.number}
              </h3>

              <h4 className="text-xl font-semibold mt-4">
                {step.title}
              </h4>

              <p className="text-gray-300 mt-3">
                {step.description}
              </p>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default HowItWorks;
function Features() {

  const features = [
    {
      title: "AI Resume Analyzer",
      description:
        "Get AI-powered feedback on your resume and improve structure, skills, and content to stand out."
    },
    {
      title: "Skill Gap Detection",
      description:
        "Analyze your current skills and discover what you need to learn for your desired career path."
    },
    {
      title: "Profile Enhancement",
      description:
        "Build a stronger professional profile with personalized recommendations and improvements."
    },
    {
      title: "AI Interview Preparation",
      description:
        "Practice interviews with AI feedback to improve confidence and communication skills."
    }
  ];


  return (
    <section className="bg-black text-white px-10 py-20">

      <h2 className="text-4xl font-bold text-center">
        Smart Tools For Your Career Growth
      </h2>

      <p className="text-gray-400 text-center mt-4">
        Everything you need to improve your profile and become job-ready.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {
          features.map((feature, index)=>(
            
            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-lg
              rounded-2xl
              p-6
              border
              border-purple-500/30
              hover:scale-105
              transition
              "
            >

              <h3 className="text-xl font-semibold text-purple-400">
                {feature.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {feature.description}
              </p>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default Features;
function AIAssistant() {

  const suggestions = [
    "Improve My Resume",
    "Find My Skill Gaps",
    "Suggest Projects",
    "Practice Interview"
  ];

  return (
    <section className="px-8 py-20 bg-black text-white">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Meet Aura, Your AI Career Companion
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Your personal AI mentor that analyzes your profile,
          improves your resume, finds skill gaps, and guides
          your career journey.
        </p>

      </div>



      {/* AI Card */}

      <div className="
      max-w-5xl
      mx-auto
      mt-12
      grid
      md:grid-cols-2
      gap-8
      ">


        {/* AI Chat */}

        <div className="
        bg-white/10
        backdrop-blur-lg
        rounded-3xl
        p-8
        border
        border-purple-500/30
        ">


          <div className="
          w-16
          h-16
          rounded-full
          bg-purple-600
          flex
          items-center
          justify-center
          text-2xl
          mb-6
          ">
            ✨
          </div>


          <h3 className="text-2xl font-semibold">
            Aura AI
          </h3>


          <p className="text-gray-300 mt-4">
            "Your resume is good, but adding more
            projects and improving React skills can
            increase your job chances."
          </p>


          <button className="
          mt-6
          px-6
          py-3
          rounded-full
          bg-purple-600
          hover:bg-purple-700
          ">
            Start Analysis
          </button>


        </div>



        {/* Suggestions */}

        <div className="
        bg-white/10
        backdrop-blur-lg
        rounded-3xl
        p-8
        border
        border-purple-500/30
        ">

          <h3 className="text-2xl font-semibold">
            What can Aura help with?
          </h3>


          <div className="mt-6 space-y-4">

          {
            suggestions.map((item,index)=>(
              
              <div
              key={index}
              className="
              p-4
              rounded-xl
              bg-white/5
              hover:bg-purple-500/20
              cursor-pointer
              transition
              "
              >

                {item}

              </div>

            ))
          }

          </div>

        </div>


      </div>


    </section>
  )
}


export default AIAssistant;
function CareerDashboard() {

  const skills = [
    {
      name: "React",
      level: "85%"
    },
    {
      name: "Java",
      level: "70%"
    },
    {
      name: "SQL",
      level: "80%"
    }
  ];


  const suggestions = [
    "Add more real-world projects",
    "Improve GitHub profile",
    "Practice DSA regularly"
  ];


  return (
    <section className="bg-black text-white px-8 py-20">


      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Your AI Career Dashboard
        </h2>

        <p className="text-gray-400 mt-4">
          Track your progress and get personalized
          recommendations to become job ready.
        </p>

      </div>



      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">


        {/* Resume Score */}

        <div className="
        bg-white/10
        rounded-3xl
        p-6
        border
        border-purple-500/30
        ">

          <h3 className="text-xl">
            Resume Score
          </h3>

          <p className="
          text-5xl
          font-bold
          mt-5
          text-purple-400
          ">
            82%
          </p>

        </div>



        {/* Skills */}

        <div className="
        bg-white/10
        rounded-3xl
        p-6
        border
        border-purple-500/30
        ">

          <h3 className="text-xl">
            Skills Analysis
          </h3>


          {
            skills.map((skill,index)=>(

              <div key={index} className="mt-5">

                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>


                <div className="bg-gray-700 h-2 rounded-full mt-2">

                  <div 
                  className="bg-purple-500 h-2 rounded-full"
                  style={{width: skill.level}}
                  >
                  </div>

                </div>


              </div>

            ))
          }

        </div>



        {/* Suggestions */}

        <div className="
        bg-white/10
        rounded-3xl
        p-6
        border
        border-purple-500/30
        ">

          <h3 className="text-xl">
            AI Suggestions
          </h3>


          <ul className="mt-5 space-y-3">

          {
            suggestions.map((item,index)=>(

              <li key={index}>
                ✓ {item}
              </li>

            ))
          }

          </ul>


        </div>


      </div>


    </section>
  )
}


export default CareerDashboard;
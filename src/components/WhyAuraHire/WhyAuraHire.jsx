function WhyAuraHire() {

  const points = [
    {
      title: "AI Powered Analysis",
      description:
      "Get instant feedback on your resume, skills, and career profile."
    },
    {
      title: "Personalized Guidance",
      description:
      "Receive recommendations based on your goals and current skills."
    },
    {
      title: "Career Growth Tracking",
      description:
      "Monitor your improvement and become job ready step by step."
    }
  ];


  return (

    <section className="bg-black text-white px-8 py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Why Choose AuraHire AI?
        </h2>

        <p className="text-gray-400 mt-4">
          More than a resume tool — your complete AI career partner.
        </p>

      </div>


      <div className="
      max-w-5xl
      mx-auto
      mt-12
      grid
      md:grid-cols-3
      gap-6
      ">

        {
          points.map((item,index)=>(

            <div
            key={index}
            className="
            bg-white/10
            rounded-3xl
            p-6
            border
            border-purple-500/30
            hover:bg-purple-500/20
            transition
            "
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>


              <p className="text-gray-400 mt-4">
                {item.description}
              </p>

            </div>

          ))
        }


      </div>


    </section>

  )
}


export default WhyAuraHire;
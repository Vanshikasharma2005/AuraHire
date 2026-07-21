function Footer() {

  return (
    <footer className="
    bg-black
    text-white
    border-t
    border-purple-500/20
    px-8
    py-12
    ">


      <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-3
      gap-8
      ">


        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold">
            AuraHire AI
          </h2>

          <p className="text-gray-400 mt-4">
            Build a stronger career profile with
            AI-powered guidance, resume improvement,
            and skill analysis.
          </p>

        </div>



        {/* Links */}

        <div>

          <h3 className="font-semibold text-lg">
            Explore
          </h3>

          <ul className="mt-4 space-y-3 text-gray-400">

            <li>Home</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>About</li>

          </ul>

        </div>




        {/* Connect */}

        <div>

          <h3 className="font-semibold text-lg">
            Connect
          </h3>

          <ul className="mt-4 space-y-3 text-gray-400">

            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Contact</li>

          </ul>

        </div>


      </div>



      <div className="
      text-center
      text-gray-500
      mt-10
      ">

        © 2026 AuraHire AI. All rights reserved.

      </div>


    </footer>
  )
}


export default Footer;
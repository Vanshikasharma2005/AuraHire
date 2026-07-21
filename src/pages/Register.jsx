import { Link } from "react-router-dom";


function Register(){

  return(

    <div className="
    min-h-screen
    bg-black
    text-white
    flex
    items-center
    justify-center
    ">


      <div className="
      w-full
      max-w-md
      bg-white/10
      backdrop-blur-lg
      border
      border-purple-500/30
      rounded-2xl
      p-8
      shadow-xl
      ">


        <h1 className="
        text-3xl
        font-bold
        text-center
        ">
          Join AuraHire AI
        </h1>


        <p className="
        text-gray-400
        text-center
        mt-3
        ">
          Create your AI-powered career profile
        </p>



        <div className="mt-8">


          <input
          type="text"
          placeholder="Full Name"
          className="
          w-full
          p-3
          rounded-lg
          bg-black/40
          border
          border-gray-700
          outline-none
          "
          />



          <input
          type="email"
          placeholder="Email Address"
          className="
          w-full
          p-3
          rounded-lg
          bg-black/40
          border
          border-gray-700
          outline-none
          mt-4
          "
          />



          <input
          type="password"
          placeholder="Create Password"
          className="
          w-full
          p-3
          rounded-lg
          bg-black/40
          border
          border-gray-700
          outline-none
          mt-4
          "
          />



          <button
          className="
          w-full
          mt-6
          py-3
          rounded-lg
          bg-purple-600
          hover:bg-purple-700
          transition
          ">
            Create Account
          </button>


        </div>




        <p className="
        text-center
        text-gray-400
        mt-6
        ">

          Already have an account?

          <Link
          to="/login"
          className="
          text-purple-400
          ml-2
          ">
            Login
          </Link>

        </p>



        <Link
        to="/"
        className="
        block
        text-center
        mt-5
        text-gray-400
        ">
          ← Back to Home
        </Link>


      </div>


    </div>

  )

}


export default Register;
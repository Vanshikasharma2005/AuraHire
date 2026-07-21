import { Link } from "react-router-dom";

function Navbar(){

 return(
   <div>
      <h1>AuraHire AI</h1>

     <Link to="/register">
      <button>Get Started</button>
     </Link> 

   </div>
 )

}

export default Navbar;
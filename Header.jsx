import { Link } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Shop from "../Pages/Shop";
import Social from "../Pages/Social";
import Work from "../Pages/Work"


 function Header(){
     return(
        <div>
             <Link to="/">Home</Link>
             <Link to="/About">About</Link>
             <Link to="/Contact">Contact</Link>
             <Link to="/Shop">Shop</Link>
             <Link to="/Social">Social</Link>
             <Link to="/Work">Work</Link>
        </div>
     )
 }
 export default Header
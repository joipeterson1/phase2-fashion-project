import { NavLink } from "react-router-dom"
import "../NavBar.css"

function NavBar(){


    return(
      <nav>
        <ul>
          <li>
          <NavLink
          to="/home"
          className="nav-link" 
        >
          Home
        </NavLink>
          </li>

          <li>
        <NavLink
          to="/style-list"
          className="nav-link"
        >
         Styles

        </NavLink>
        </li>

         <li>
         <NavLink
          to="/style-form"
          className="nav-link"
        >
         Style Form
        </NavLink>
        </li>
        </ul> 
      </nav> 
    )
}
export default NavBar
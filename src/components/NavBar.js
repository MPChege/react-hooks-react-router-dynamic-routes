
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <nav>
    <ul>
      <li>
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/actors">Actors</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/directors">Directors</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
      </li>
    </ul>
  </nav>
    )
}

export default NavBar;
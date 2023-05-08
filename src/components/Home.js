
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="Title">Welcome to our site</h1>
      <li>
      <Link className="view-links" to="/actors">View Actors</Link>
      </li>
      <li>
      <Link className="view-links" to="/directors">View Directors</Link>
      </li>
      <li>
      <Link className="view-links" to="/movies">View Movies</Link>
      </li>
    </div>
  )
}

export default Home;
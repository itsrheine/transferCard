import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🎫</span>
          TransferCard
        </Link>
      </h1>

      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/store">
              Tickets
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/routes">
              Routes
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

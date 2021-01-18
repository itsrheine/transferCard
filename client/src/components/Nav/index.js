import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function updateNav() {
    if (Auth.loggedIn()) {
      return(
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">
              Profile
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
            <Link to="/faq">
              FAQ
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
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
          <Link to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🎫</span>
          TransferCard
        </Link>
      </h1>

      <nav>
        {updateNav()}
      </nav>
    </header>
  );
}

export default Nav;

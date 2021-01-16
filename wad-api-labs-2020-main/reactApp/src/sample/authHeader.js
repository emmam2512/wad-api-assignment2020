import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./authContext";
import { Link } from "react-router-dom";
import "../sample/globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sample/components/siteHeader/siteHeader.css";


const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <p>
   
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
     Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/favourites">
              Favourites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/upcoming">
              Upcoming Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/toprated">
              Top Rated Movies
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  </p>
  ) : (
    <p>
      <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
       You are not logged in{" "}
      <button onClick={() => history.push("/login")}>Login</button>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
    </p>
  );
};

export default withRouter(BaseAuthHeader);

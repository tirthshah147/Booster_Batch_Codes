import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = (props) => {
  return (
    <div className="header__nav">
      <div className="nav__content">
        <h2 className='logo'>Newton School</h2>
        <nav>
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/home"> Home</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="">Jobs</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <Link className="btn btn-login" to='/login'>
          Login
        </Link>
        <Link className="btn btn-signup" to='/signup'>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

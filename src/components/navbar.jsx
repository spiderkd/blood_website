import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import img from "../assets/bnation.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav className="nav" ref={navRef}>
        <Link onClick={showNavbar} to="/" className="site-title">
          <img src={img} className="logo_image" />
        </Link>
        <ul className="links-ul">
          <CustomLink onClick={showNavbar} to="/">
            HOME
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/donate">
            DONATE
          </CustomLink>
          <CustomLink
            className="get_blood"
            onClick={showNavbar}
            to="/get_blood"
          >
            GET BLOOD
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/blood_camps">
            CAMPS
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/about">
            ABOUT
          </CustomLink>
        </ul>
        <li className="login-ul">
          <CustomLink onClick={showNavbar} to="/signup">
            <button className=" but reg">Sign up</button>
          </CustomLink>
          <CustomLink onClick={showNavbar} to="/login" className="login">
            <button className=" but log">Login</button>
          </CustomLink>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </li>
      </nav>
      <nav>
        <div className="logo_image_mob_div">
        
          <Link to="/" className="site-title">
            <img src={img} className="logo_image_mob" />
          </Link>
        </div>
        <button className="nav-btn  " onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;

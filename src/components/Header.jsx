import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./css/header.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const navigateToElement = (path, elementId) => {
  const navigate = useNavigate();
  navigate(path);

  // Use setTimeout to ensure the navigation is complete before scrolling
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const Header = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const [searchBox ,setSearchBox] = useState(false);

  return (
    <header className="header">
      <nav className="nav container ">
        <div className="nav__data">
          <a href="/" className="nav__logo">
            <img src={logo} alt="Logo" className="logo" height="auto" />
          </a>

          <div className="nav__toggle" id="nav-toggle">
            {navbarVisible ? (
              <img
                className="nav__burger"
                src="./menu.svg"
                alt="menubar"
                onClick={() => setNavbarVisible(!navbarVisible)}
              />
            ) : (
              <img
                className="nav__close"
                src="./close.png"
                alt="menubar"
                onClick={() => setNavbarVisible(!navbarVisible)}
              />
            )}
          </div>
        </div>

        {/* <!--=============== NAV MENU ===============--> */}
        <div
          className={`nav__menu ${!navbarVisible ? "show-menu" : " "}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <NavLink to={"/"} onClick={scrollToTop}>
                Home
              </NavLink>
            </li>

            {/* <!--=============== DROPDOWN 2 ===============--> */}
            <li className="dropdown__item">
              <div className="nav__link">
                <NavLink to={"/about"} onClick={scrollToTop}>
                  About us
                </NavLink>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link
                    to="/about#ourstory"
                    onClick={() => {
                      navigateToElement("/about", "ourstory");
                    }}
                    className="dropdown__link"
                  >
                    Story
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about#ourpurpose"
                    onClick={() => {
                      navigateToElement("/about", "ourpurpose");
                    }}
                    className="dropdown__link"
                  >
                    Purpose
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about#ourmission"
                    onClick={() => {
                      navigateToElement("/about", "ourmission");
                    }}
                    className="dropdown__link"
                  >
                     Mission
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about#ourvision"
                    onClick={() => {
                      navigateToElement("/about", "ourvision");
                    }}
                    className="dropdown__link"
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#ourteam"
                    onClick={() => {
                      navigateToElement("/about", "ourteam");
                    }}
                    className="dropdown__link"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown__item">
              <div className="nav__link">
                <NavLink to={"/products"} onClick={scrollToTop}>Our Products</NavLink>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link to="/products#marcherobo"  onClick={() => {
                      navigateToElement("/products", "marcherobo");
                    }} className="dropdown__link">
                    Marche Robo
                  </Link>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__link">
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown__item">
              <div className="nav__link">
                <NavLink to={"/news"} onClick={scrollToTop}>
                  Media Center
                </NavLink>
              </div>

              <ul className="dropdown__menu">
                <li>
                  <Link
                    to="/news#socialmedia"
                    onClick={() => {
                      navigateToElement("/news", "Social Media");
                    }}
                    className="dropdown__link"
                  >
                    Social Media
                  </Link>
                </li>

                <li>
                  <Link
                    to="/news#newsandevents"
                    onClick={() => {
                      navigateToElement("/news", "newsandevents");
                    }}
                    className="dropdown__link"
                  >
                    News & Events
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <NavLink to={"/news"}>News & Events</NavLink>
            </li> */}

            <li className="dropdown__item">
              <div className="nav__link">
                <NavLink to={"/videos"} onClick={scrollToTop}>
                  Videos
                </NavLink>
              </div>
            </li>

            <li>
              <NavLink to={"/contact"} onClick={scrollToTop}>
                Contact
              </NavLink>
            </li>

            {!navbarVisible ? (
              <li>
                <form className="searchbar lisearchbar">
                  <input
                    type="text"
                    name="search"
                    placeholder="product search"
                  />
                  <button>
                    <img src="./maginifier.svg" alt="maginifier" />
                  </button>
                </form>
              </li>
            ) : (
              ""
            )}
          </ul>
          {navbarVisible ? (
            <form className="searchbar ">
              <input className={searchBox ?"searchbarActive  " :" searchbarDeactive" } type="text" name="search" placeholder="product search" />
              <button type="button" onClick={()=>{setSearchBox(!searchBox)}}>
                <img src="./maginifier.svg" alt="maginifier" />
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

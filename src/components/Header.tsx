import logo from "../assets/Logo_Kyron.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="header__menu">
          <li>
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <a className="header__link" href="#featured">
              About
            </a>
          </li>
          <li>
            <a className="header__link" href="#contact">
              Services
            </a>
          </li>
          <li className="header__line">
            <a className="header__link" href="#contact">
              Portolio
            </a>
          </li>
          <li>
            <Link className="header__link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <a className="header__link" href="#contact">
              Account
            </a>
          </li>
        </ul>
        <button className="header__bars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;

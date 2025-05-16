import logo from "../assets/Logo_Kyron.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header container">
      <div className="header_logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="header__menu">
          <li>
            <a className="header__link" href="#about">
              Home
            </a>
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
            <a className="header__link" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="header__link" href="#contact">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

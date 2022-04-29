import "./header.css";
import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";

export default function Navbar() {
  return (
    <div className="nav">
     <a href="#!"> <img src={logo} alt="logo" /></a>

      <ul className="nav__list">
        <li>
          <a className="nav__link" href="#!">
            Products
          </a>
        </li>
        <li>
          <a className="nav__link" href="#!">
            About us
          </a>
        </li>
        <li>
          <a className="nav__link" href="#!">
            Blog
          </a>
        </li>
        <li>
          <a className="nav__link" href="#!">
            Contact
          </a>
        </li>
      </ul>

      <div className="nav__call">
        <img src={phone} alt="phone" />
        <div className="nav__numbers">
          <a href="#!">95-004-80-90</a>
          <a href="#!"> 94-641-40-00</a>
        </div>
      </div>
    </div>
  );
}

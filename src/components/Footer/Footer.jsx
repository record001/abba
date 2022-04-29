import "./footer.css";
import footer_logo from "../../images/footer_logo.svg";
import coding from "../../images/coding.svg";
import media from "../../images/media.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__wrapper">
            <div className="footer__address">
              <a href="#!">
                <img src={footer_logo} alt="logo" />
              </a>

              <p>
                Tashkent, Mustakillik St, 15 <br /> Tel: +998 99 000 00 00
                <br /> E-mail: hello@alibaraka.com
              </p>
            </div>

            <div className="footer__nav">
              <ul className="footer__list">
                <h4>About us</h4>
                <li>
                  <a href="#!">About us </a>
                </li>
                <li>
                  <a href="#!">Our team</a>
                </li>
                <li>
                  <a href="#!">Frequent Questions</a>
                </li>
                <li>
                  <a href="#!">Contact us</a>
                </li>
              </ul>
              <ul className="footer__list">
                <h4>Products</h4>
                <li>
                  <a href="#!"> Plyonka </a>
                </li>
                <li>
                  <a href="#!">Zajim</a>
                </li>
                <li>
                  <a href="#!">Isitish x Sovutish</a>
                </li>
                <li>
                  <a href="#!">Suv taqsimoti</a>
                </li>
              </ul>
              <ul className="footer__list">
                <h4>Blog</h4>
                <li>
                  <a href="#!">10X </a>
                </li>
                <li>
                  <a href="#!">Gardening</a>
                </li>
                <li>
                  <a href="#!">Melon</a>
                </li>
                <li>
                  <a href="#!">Water dist</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <div className="footer__wrapper">
              <p className="allRights">Все права защищены.</p>

              <div className="coding">
                  <p>Разработано в</p>
                  <img src={coding} alt="coding" />
                  <img src={media} alt="coding" />
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

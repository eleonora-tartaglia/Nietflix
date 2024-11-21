import "../styles/Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__socials">
                    <img src={facebook} alt="Facebook" className="footer__icon" />
                    <img src={instagram} alt="Instagram" className="footer__icon" />
                    <img src={twitter} alt="Twitter" className="footer__icon" />
                    <img src={youtube} alt="YouTube" className="footer__icon" />
                </div>
                <div className="footer__columns">
                    <div className="footer__column">
                        <ul>
                            <li><a href="#">Audio et sous-titres</a></li>
                            <li><a href="#">Presse</a></li>
                            <li><a href="#">Confidentialité</a></li>
                            <li><a href="#">Nous contacter</a></li>
                        </ul>
                        <button className="footer__service-code">Service Code</button>
                        <p className="footer__copyright">© with a lot of fun by Tinker Bell</p>
                    </div>

                    <div className="footer__column">
                        <ul>
                            <li><a href="#">Autodescription</a></li>
                            <li><a href="#">Relations investisseurs</a></li>
                            <li><a href="#">Informations légales</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <ul>
                            <li><a href="#">Centre d’aide</a></li>
                            <li><a href="#">Recrutement</a></li>
                            <li><a href="#">Préférences de cookies</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <ul>
                            <li><a href="#">Cartes cadeaux</a></li>
                            <li><a href="#">Conditions d’utilisation</a></li>
                            <li><a href="#">Mentions légales</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

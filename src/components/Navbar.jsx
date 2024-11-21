import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import loupe from "../assets/loupe.svg";
import notification from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import triangle from "../assets/triangle.svg";

function Navbar() {
    return ( 
        <header className="nav_bar">

            <div className="left_part">
                <img className="logo" src={logo} alt="Nietflix" />
                <nav className="menu">
                    <a href="#">Découverte</a>
                    <a href="#">Séries TV</a>
                    <a href="#">Films</a>
                    <a href="#">Programmes originaux</a>
                    <a href="#">Ajouts récents</a>
                    <a href="#">Ma liste</a>
                </nav>

            </div>

            <div className="right_part">
                <img className="loupe" src={loupe} alt="Recherche" />
                <a href="#">JEUNESSE</a>
                <div className="notification">
                    <img className="cloche" src={notification} alt="Notification" />
                    <div className="cercle_rouge">
                        2
                    </div>
                </div>
                <img className="avatar" src={avatar} alt="Utilisateur" />
                <img className="triangle" src={triangle} alt="Barre deroulante" />
            </div>

        </header>
    );
};

export default Navbar;
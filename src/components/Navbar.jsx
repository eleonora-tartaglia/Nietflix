import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import loupe from "../assets/loupe.svg";
import notification from "../assets/notification.svg";
import avatar from "../assets/hibou_avatar.svg";
import triangle from "../assets/triangle.svg";

function Navbar() {
    // State pour gérer l'ouverture du menu déroulant
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Utilisation de useEffect pour fermer le menu lorsque l'utilisateur clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest(".dropdown_menu") && // Si le clic n'est pas sur le menu
                !event.target.closest(".triangle") // Et si le clic n'est pas sur le triangle
            ) {
                setIsMenuOpen(false); // Ferme le menu
            }
        };

        // Ajout de l'écouteur
        document.addEventListener("mousedown", handleClickOutside);

        // Nettoyage de l'écouteur
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="nav_bar">
            <div className="left_part">
                <img src={logo} alt="Nietflix" className="logo" />
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
                    <div className="cercle_rouge">2</div>
                </div>

                <img className="avatar" src={avatar} alt="Utilisateur" />
                <img className="triangle" src={triangle} alt="Barre deroulante" onClick={toggleMenu}/>
            </div>

            {/* Afficher le menu déroulant si `isMenuOpen` est true */}
            {isMenuOpen && (
                <div className="dropdown_menu">
                    <div className="menu_item">Gérer les profils</div>
                    <div className="menu_item">Transférer un profil</div>
                    <div className="menu_item">Compte</div>
                    <div className="menu_item">Centre d'aide</div>
                    <div className="menu_item">Se déconnecter</div>
                </div>
            )}
        </header>
    );
}

export default Navbar;

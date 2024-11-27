import "../styles/Hero.css";
import Image from "../assets/narcos_back.png";
import titre from "../assets/titre.svg";
import titre_serie from "../assets/titre_serie.svg";
import bouton_play from "../assets/btn-play.svg";
import bouton_mylist from "../assets/btn-my-list.svg";

function Hero () {
    return (
        <section className="hero">
            <div className="hero__background">
                <img src={Image} alt="Image-Narcos" className="hero__image" />
            </div>
            <div className="hero__content">
                <img src={titre} alt="NETFLIX ORIGINAL" className="hero__title" />
                <img src={titre_serie} alt="NARCOS" className="serie__title" />
                <p className="hero__description">
                    Regardez la saison 3 maintenant
                    Le cartel de Cali reprend le pouvoir en Colombie.
                    Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.
                </p>
                <div className="hero__buttons">
                    <button className="hero__button">
                        <img src={bouton_play} alt="Image-bouton-play" />
                    </button>
                    <button className="hero__button">
                        <img src={bouton_mylist} alt="Image-bouton-mylist" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
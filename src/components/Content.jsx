import "../styles/Content.css";

import crown from "../assets/crown.png";
import house_cards from "../assets/house_cards.png";
import suburra from "../assets/suburra.png";
import black_mirror from "../assets/black_mirror.png";
import juventus from "../assets/juventus.png";
import dirty_money from "../assets/dirty_money.png";
import el_chapo from "../assets/el_chapo.png";
import casa_papel from "../assets/casa_papel.png";
import troie from "../assets/troie.png";

import narcos from "../assets/narcos2.png";
import design from "../assets/design.png";
import fauda from "../assets/fauda.png";
import ugly from "../assets/ugly.png";
import churchill from "../assets/churchill.png";
import why from "../assets/13_why.png";
import marco_polo from "../assets/marco_polo.png";
import trump from "../assets/trump.png";
import tupac from "../assets/tupac.png";

import polak from "../assets/bg-poland.png";
import ida from "../assets/ida.png";
import vie from "../assets/aimaient_vie.png";
import cold_war from "../assets/cold_war.png";
import le_coursier from "../assets/le_c.png";

import play from "..//assets/ic-play.svg";

import homme_facile from "../assets/homme_facile.png";
import marseille from "../assets/marseille.png";
import cuba_libre from "../assets/cuba_libre.png";
import soupcons from "../assets/soupcons.png";
import alieniste from "../assets/alieniste.png";
import stranger from "../assets/stranger.png";
import secret from "../assets/secret.png";

const categories = [
    {
        title: "Revoir",
        images: [
            { src: crown, alt: "The Crown" },
            { src: house_cards, alt: "House of Cards" },
            { src: suburra, alt: "Suburra" },
            { src: black_mirror, alt: "Black Mirror" },
            { src: juventus, alt: "Club de Légende Juventus" },
            { src: why, alt: "13 Reasons Why" },
            { src: marco_polo, alt: "Marco Polo" },
            { src: casa_papel, alt: "Casa de Papel" },
            { src: troie, alt: "Troie La Chute d'une Cité" },
        ],
    },
    {
        title: "Tendances actuelles",
        images: [
            { src: narcos, alt: "Narcos" },
            { src: tupac, alt: "Unsolved Tupac" },
            { src: fauda, alt: "Fauda" },
            { src: ugly, alt: "Ugly Delicious" },
            { src: churchill, alt: "Churchill" },
            { src: dirty_money, alt: "Dirty Money" },
            { src: el_chapo, alt: "El Chapo" },
            { src: trump, alt: "Trump" },
            { src: design, alt: "L'Art du Design" },
        ],
    },
    {
        title: "PROGRAMMES ORIGINAUX NETFLIX",
        images: [
            { src: marseille, alt: "Marseille" },
            { src: stranger, alt: "Stranger Things" },
            { src: secret, alt: "Secret City" },
            { src: homme_facile, alt: "Je ne suis pas un Homme Facile" },
            { src: cuba_libre, alt: "Cuba Libre" },
            { src: soupcons, alt: "Soupçons" },
            { src: alieniste, alt: "L'Aliéniste" },
        ],
    },
    {
        title: "Catégories",
        categories: [
            { name: "Comédie", color: "#FF6F61" },
            { name: "Action", color: "#FFC107" },
            { name: "Drame", color: "#42A5F5" },
            { name: "Sci-Fi", color: "#AB47BC" },
            { name: "Romance", color: "#F06292" },
            { name: "Thriller", color: "#8BC34A" },
            { name: "Émissions", color: "#26C6DA" },
        ],
    },
];

const discovery = {
    background: polak,
    title_first: "L'AGE D'OR DU CINEMA",
    title_second: "POLONAIS",
    subtitle: "Netflix Découverte - Juillet 2018",
    description: "Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.",
    images: [
        { src: ida, alt: "Ida", title: "Ida", year: 2013, duration: "1h 22m", category: "Drame"},
        { src: vie, alt: "Ils aimaient la vie", title: "Ils aimaient la vie", year: 1957, duration: "1h 35m", category: "Drame"},
        { src: cold_war, alt: "Cold War", title: "Cold War", year: 2018, duration: "1h 25m", category: "Drame/Mélodrame"},
        { src: le_coursier, alt: "Le Coursier", title: "Le Coursier", year: 1962, duration: "1h 15m", category: "Comédie"},
    ],
};

function Content() {
    return (
        <section className="content">
            {categories.map((category, index) => (
                <div key={index}>
                    <h2 className="content__title">{category.title}</h2>
                    <div className="content__row">
                        {category.images
                            ? category.images.map((image, idx) => (
                                  <img
                                      key={idx}
                                      src={image.src}
                                      alt={image.alt}
                                      className="content__image"
                                  />
                              ))
                            : category.categories.map((cat, idx) => (
                                  <div
                                      key={idx}
                                      className="category__item"
                                      style={{ backgroundColor: cat.color }}
                                  >
                                      <span>{cat.name}</span>
                                      <span className="category__icon">▼</span>
                                  </div>
                              ))}
                    </div>

                    {/* Afficher Discovery après "Tendances actuelles" */}
                    {category.title === "Tendances actuelles" && (
                        <section className="discovery">
                            <div className="discovery__container">
                                <h2 className="discovery__title">{discovery.title_first}</h2>
                                <h1 className="discovery__title2">{discovery.title_second}</h1>
                                <h3 className="discovery__subtitle">{discovery.subtitle}</h3>
                                <p className="discovery__description">{discovery.description}</p>
                                <div className="container__flute">
                                    <div className="discovery__row">
                                        {discovery.images.map((image, idx) => (
                                            <div key={idx} className="discovery__item">
                                                <div className="discovery__image-container">
                                                    <img src={image.src} alt={image.alt} className="discovery__image" />
                                                    <button className="play-button">
                                                        <img src={play} alt="Play" className="play-icon" />
                                                    </button>
                                                    <div className="discovery__overlay">
                                                        <h4 className="discovery__title__img">{image.title}</h4>
                                                        <p className="discovery__meta">
                                                            {image.year} • {image.category} • {image.duration}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section pour les éléments additionnels */}
                                <div className="discovery__additional">
                                    <div className="discovery__additional-item">
                                        L'âge d'or du cinéma polonais (juillet 2018)
                                    </div>
                                    <div className="discovery__additional-item">
                                        La nouvelle vague française (juin 2018)
                                    </div>
                                    <div className="discovery__additional-item">
                                        Direction Cannes (mai 2018)
                                    </div>
                                    <div className="discovery__additional-item">
                                        Bollywood Classiques (mai 2018)
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Content;
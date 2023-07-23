import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";
import gift from "../assets/GiftCard.png";
import steak from "../assets/Steak.png";
import cell from "../assets/Cell.png";
import "../styles/components/offers.css";

const Offer = ({ img, alt, title, desc, path, link }) => {
  Offer.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    link: PropTypes.string,
  };

  return (
    <div className="offer-card">
      <figure className="offer-fig">
        <img
          className="offer-img"
          src={
            (img === "gift" && gift) ||
            (img === "steak" && steak) ||
            (img === "cell" && cell)
          }
          alt={alt}
        />
      </figure>
      <h2 className="offer-title">{title}</h2>
      <p className="offer-desc">{desc}</p>
      <Link className="offer-link" to={path}>
        {link}
        <FiArrowRight className="offer-arrow" />
      </Link>
    </div>
  );
};

export default Offer;

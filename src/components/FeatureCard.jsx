import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/components/featurecard.css";

const FeatureCard = ({ tagline, image, btnTitle, path }) => {
  FeatureCard.propTypes = {
    tagline: PropTypes.string,
    image: PropTypes.string,
    btnTitle: PropTypes.string,
    path: PropTypes.path,
  };

  return (
    <div className="feature-card">
      <h2 className="tagline">{tagline}</h2>
      <figure className="feature-fig">
        <img className="feature-img" src={image} alt="Steak" />
      </figure>
      <button className="feature-btn">
        <Link to={path}>{btnTitle}</Link>
      </button>
    </div>
  );
};

export default FeatureCard;

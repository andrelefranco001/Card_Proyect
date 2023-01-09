import React from "react";
import PropTypes from "prop-types";
import "./cards.css";

function Card({ title, imgSource, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img className="card-img-top " src={imgSource} alt="" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
        <a href="#!" className="btn btn-outline-secondary ">
          More info
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSource: PropTypes.string,
  text: PropTypes.string,
};
export default Card;

// Foto de John Nail: https://www.pexels.com/es-es/foto/jardin-cesped-arquitectura-cielo-azul-5162750/
// Foto de Mike B: https://www.pexels.com/es-es/foto/casa-de-2-plantas-de-hormigon-blanco-y-marron-cerca-de-un-arbol-463996/
// Foto de Bryn Photography: https://www.pexels.com/es-es/foto/cielo-nubes-jardin-arboles-8522014/

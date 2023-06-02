import React from "react";
import "./ShowCard.css";
import { Link } from "react-router-dom";
import { BsFillStarFill, BsPlayCircleFill } from "react-icons/bs";
const ShowCard = ({ show: { show } }) => {
  return (
    <div className="showCard">
      <div className="showCard__playBtn">
        <BsPlayCircleFill />
      </div>
      <img
        className="showCard__image"
        src={show.image.medium}
        alt="show cover"
      />
      <div className="showCard__title">
        <Link to={`shows/${show.id}`}>
          <h1>{show.name}</h1>
        </Link>
        <p>
          <span>
            <BsFillStarFill />
          </span>
          {show.rating.average ? show.rating.average : "..."}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;

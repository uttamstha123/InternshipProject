import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowScreen.css";
const ShowScreen = ({ shows }) => {
  const { id } = useParams();
  const [show, setShow] = useState();
  useEffect(() => {
    const getShowById = shows.find((show) => show.show.id == id);
    setShow(getShowById);
  }, []);
  return (
    <>
      {show ? (
        <div className="showScreen">
          <div className="showScreen__image">
            <img src={show.show.image.original} alt="shows cover" />
          </div>
          <div className="showScreen__details">
            <h1>{show.show.name}</h1>
            <h2>Show Details</h2>
            <h3>{show.show.summary}</h3>
            <h3>
              Status:{" "}
              <span>
                {show.show.schedule.days} at {show.show.schedule.time}
              </span>
            </h3>
            <h3>
              Runtime:
              <span>{show.show.runtime}min</span>
            </h3>
            <h3>
              Genres:
              <span>{show.show.genres.toString()}</span>
            </h3>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};
export default ShowScreen;

import React from "react";
import ShowCard from "../../../components/showCard/ShowCard";
import "./HomeScreen.css";
const HomeScreen = ({shows}) => {
  return (
    <div className="homeScreen">
      <h1 className="homeScreen__header">Tv Shows</h1>
      <div className="homeScreen__shows">
        {shows.map((show) => (
          <ShowCard key={show.show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

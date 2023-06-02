import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import ShowScreen from "./components/screens/showScreen/ShowScreen";
import axios from "axios";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(data);
      } catch (error) {
        console.error("Error fetching shows: ", error);
      }
    };

    fetchShows();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen shows={shows} />} />
        <Route path="/shows/:id" element={<ShowScreen shows={shows} />} />
      </Routes>
    </Router>
  );
}

export default App;

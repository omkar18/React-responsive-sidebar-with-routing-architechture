import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPlcesList from "./pages/allPlacesList";
import FavouritePage from "./pages/favourite";
import MainLayout from "./layout/MainLayout";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <MainLayout />
      </Router>
    </>
  );
}

export default App;

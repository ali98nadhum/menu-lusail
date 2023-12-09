import "./App.css";
import { item } from "./data";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import Catogory from "./components/Catogory/Catogory"
import CardDeteils from "./components/CardDeteils/CardDeteils"


function App() {
  const [data, ] = useState(item)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catogory-menu"
            element={<Catogory itemProps={data} />}
          />
          <Route
            path="/item-details/:id"
            element={<CardDeteils itemProps={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

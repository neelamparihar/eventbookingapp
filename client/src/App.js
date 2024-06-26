import "./App.css";
import Home from "./components/Home";

import Gallary from "./components/Gallary";
import { Route, Routes } from "react-router-dom";
import Aboutproperty from "./components/Aboutproperty";
import Deluxe from "./components/Deluxe";
import Single from "./components/Single";
import Swimmingpool from "./components/Swimmingpool";
import Park from "./components/Park";
import Boatclub from "./components/Boatclub";
import Cafeteria from "./components/Cafeteria";
// eslint-disable-next-line no-unused-vars
import axiosInstance from "./axiosInstance";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/galary" element={<Gallary />}></Route>
        <Route path="/about" element={<Aboutproperty />}></Route>
        <Route path="/deluxe" element={<Deluxe />}></Route>
        <Route path="/single" element={<Single />}></Route>
        <Route path="/pool" element={<Swimmingpool />}></Route>
        <Route path="/park" element={<Park />}></Route>
        <Route path="/cafeteria" element={<Cafeteria />}></Route>
        <Route path="/club" element={<Boatclub />}></Route>
      </Routes>
    </>
  );
}

export default App;

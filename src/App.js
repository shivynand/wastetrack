import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CabinCrewInterface from "./components/CabinCrewInterface";
import WasteLogForm from "./components/WasteLogForm";
import FlightStats from "./components/FlightStats";
import RealTimeDashboard from "./components/RealTimeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={CabinCrewInterface} />
        <Route path="/log-waste" component={WasteLogForm} />
        <Route path="/flight-stats" component={FlightStats} />
        <Route path="/dashboard" component={RealTimeDashboard} />
      </Routes>
    </Router>
  );
}

export default App;

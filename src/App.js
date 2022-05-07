import React from "react";
import "./App.css";
import PlaceComponent from "./components/place.component";

function App() {
  return (
    <div className="row mt-3">
      <div className="col-6 offset-3">
        <PlaceComponent />
      </div>
    </div>
  );
}

export default App;

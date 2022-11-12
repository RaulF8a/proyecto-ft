import React from "react";


function App() {
  return (
    <div className="menuDiv">
      <div className="menuItem">
        <h1>Mircoservices Project</h1>
      </div>
      <div>
        <a href="https://dry-plains-07186.herokuapp.com/">
        <button className="btn btn-primary btn-dark btn-lg btnItem">ToDo List</button>
        </a>
      </div>
      <div>
        <a href="https://weather-git-v3-raulochoa21-dev.apps.sandbox.x8i5.p1.openshiftapps.com/">
          <button className="btn btn-primary btn-dark btn-lg btnItem">Weather</button>
        </a>
      </div>
    </div>
  );
}

export default App;

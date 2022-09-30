import React from "react";
import './styles/App.css';
import Home from "./Page/Home";
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Home />
    </div>
  );
}

export default App;

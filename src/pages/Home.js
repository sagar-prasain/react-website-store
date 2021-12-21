import React from "react";
import { Link } from "react-router-dom";
import whippy from "../assets/whippy.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${whippy})` }}>
      <div className="headerContainer">
        <h1> Store Espresso </h1>
        <p> Come As You Are</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

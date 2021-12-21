import React from "react";
import b from "../assets/b.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${b})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
Our Produce is delivered to our premises daily, and at Store Espresso our food reflects a hint of a modern Mediterranean and casual Italian cuisine.

Features of the Store cafe menu include our favoured breakfast plate with sides of jamon and smoked trout, and our well-loved bacon and egg organic sourdough panini.

Store Espresso also serves a wide selection of menu items for lunch such as papadelle with slow cooked lamb ragu, a great array of burgers, and delicious salads such as poached chicken with wild rocket and pomegranate.

Be sure to leave some space for Sally and Margaret's locally home baked treats. Some of the best sweet treats made in Sydney's inner west!

Just ask our amazing and helpful staff if you have any dietary requirements or special requests.

Our coffee is always freshly roasted to maintain freshness and quality.
        </p>
      </div>
    </div>
  );
}

export default About;

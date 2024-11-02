import React from "react";
import "./CommerceAi.css";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";

const CommerceAi = () => {
  return (
    <div className="CommerceAi">
      <h1 className="title">Qubit CommerceAI</h1>
      <p className="des">The new way to drive growth.</p>
      <div className="cards">
        <div className="card">
          <img src={card1} alt="card 1 icon" />
          <h3 className="card-title">More insight</h3>
          <p className="description">
            Learn which products drive performance and which don't, through
            automated insights you can action.
          </p>
        </div>
        <div className="card">
          <img src={card2} alt="card2 icon" />
          <h3 className="card-title">More personal</h3>
          <p className="description">
            Qubit CommerceAI generates a model per shopper to make every
            customer interaction more relevant.
          </p>
        </div>
        <div className="card">
          <img src={card3} alt="card3 icon" />
          <h3 className="card-title">More effective</h3>
          <p className="description">
            Qubit fuses data, intent, and design tools to enable your team to
            create more effective customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommerceAi;

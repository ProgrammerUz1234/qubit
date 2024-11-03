import React from "react";
import "./Use.css";
import bg from './assets/bg.png'

const Use = () => {
  return (
    <div className="Use">
      <h1 className="use-title">All the power. Easy to use.</h1>
      <p className="use-des">
        By collaborating with real ecommerce teams we've built the next-gen
        personalization tool. No code. No clunkiness.
      </p>
      <img src={bg} alt="background" />

      <div className="btn-wrapper">
        <button className="btn active">See products</button>
        <button className="btn">Book a demo</button>
      </div>
    </div>
  );
};

export default Use;

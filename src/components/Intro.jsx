import { useState } from "react";

export default function Intro(props) {
  return (
    <section className={`intro ${props.isHidden ? "hidden" : ""}`}>
      <h1>Quizzical</h1>
      <p>Test your General Knowledge</p>
      <button className="btn" onClick={props.click}>
        Start quiz
      </button>
    </section>
  );
}

import React from "react";
import Logo from "./Logo";
import MiddleContent from "./MiddleContent";
import Subscribe from "./Subscribe";
import "./Footer.css";

export default function Footer({ fixed }) {
  return (
    <section className={`footer pb-0 ${fixed ? "fixed-footer" : ""}`}>
      <div className="container">
        <div className="row">
          <Logo />
          <MiddleContent />
          <Subscribe />
        </div>
      </div>
    </section>
  );
}

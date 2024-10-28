import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

export default function Hero() {
 return (
  <div className="parents">
   <section className="hero divs1" id="hero">
    <h1>Welcome to HR Solutions</h1>
    <p><LoremIpsum
     avgSentencesPerParagraph={6} /></p>
    <a href="#about">
     <button href="#about" className="cta-button more">Learn More</button>
    </a>
    <a href="#gallery">
     <button href="#about" className="cta-button gallerys">Gallery</button>
    </a>
   </section>
   <section className="divs2"></section>
  </div>
 );
}
import React from "react";
import image1 from '../img/Darkshell.jpeg';
import image2 from '../img/Fractal.jpg';
import image3 from '../img/Fuchsia.jpeg';
import image4 from '../img/Fractal.jpg';
import image5 from '../img/Fuchsia.jpeg';
import image6 from '../img/Fractal.jpg';


export default function Service() {
 return (
  <div id="gallery" className="gallery">
   <h1 className="gallery-title">GALLERY</h1>
   <div class="parent">
    <div className="div1 large"><img className="images" src={image1} alt="images" /></div>
    <div className="div2 small"><img className="images" src={image2} alt="images" /> </div>
    <div className="div3 medium"><img className="images" src={image3} alt="images" /> </div>
    <div className="div4 medium"><img className="images" src={image4} alt="images" /> </div>
    <div className="div5 small"><img className="images" src={image5} alt="images" /> </div>
    <div className="div6 large"><img className="images" src={image6} alt="images" /> </div>
    <div className="div7 medium"><img className="images" src={image6} alt="images" /> </div>
    <div className="div8 medium"><img className="images " src={image6} alt="images" /> </div>
   </div>
  </div>
 );
}
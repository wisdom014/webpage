import React from "react";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import whatsapp from "../img/whatsapp.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";

export default function Footer() {
 return (
  <footer id="contact" className="footer">
   <div className="sub-card">
    <span className="card__title">
     Subscribe
     <svg
      fill="333"
      width="40px"
      viewBox="0 -960 960 960"
      height="40px"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path d="M106.67-564q0-93.33 41.5-171.17 41.5-77.83 111.16-129.5L299-811.33q-57.33 42.66-91.5 106.66T173.33-564h-66.66Zm680 0q0-76.67-34.17-140.67-34.17-64-91.5-106.66l39.67-53.34q69.66 51.67 111.16 129.5 41.5 77.84 41.5 171.17h-66.66ZM160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z" />
     </svg>
    </span>
    <p className="card__content">
     Get fresh web design resources delivered straight to your inbox every
     week.
    </p>
    <div className="card__form">
     <input className="card__mail" type="text" placeholder="Your Email" />
     <button title="SignUp" className="sign-up">
      <svg
       fill="#e8eaed"
       width="24px"
       viewBox="0 -960 960 960"
       height="24px"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
     </button>
    </div>
   </div>
   <div className="con-container px-4 mx-auto">
    <div className="mx-auto">
     <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
       Contact Us
      </h2>
      <form>
       <div className="mb-4">
        <label className="block text-gray-800 mb-1" htmlFor="name">
         Name
        </label>
        <input
         className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
         placeholder="Enter your name"
         type="text"
        />
       </div>
       <div className="mb-4">
        <label className="block text-gray-800 mb-1" htmlFor="email">
         Email
        </label>
        <input
         className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
         placeholder="Enter your email"
         name="email"
         id="email"
         type="email"
        />
       </div>
       <div className="mb-4">
        <label className="block text-gray-800 mb-1" htmlFor="message">
         Message
        </label>
        <textarea
         className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
         rows={4}
         placeholder="Enter your message"
         name="message"
         id="message"
        />
       </div>
       <button
        className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
        type="submit"
       >
        Send Message
       </button>
      </form>
     </div>
    </div>
   </div>
   <div className="card">
    <a className="socialContainer containerOne" href="#">
     <img src={instagram} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerTwo" href="#">
     <img src={facebook} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerThree" href="#">
     <img src={whatsapp} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerFour" href="#">
     <img src={twitter} className="socialSvg" alt="logo" />
    </a>

    <a className="socialContainer containerFive" href="#">
     <img src={linkedin
     } className="socialSvg" alt="logo" />
    </a>
   </div>
   <p>&copy; 2024 Elijah Akinniyi. All rights reserved.</p>
  </footer>
 );
}
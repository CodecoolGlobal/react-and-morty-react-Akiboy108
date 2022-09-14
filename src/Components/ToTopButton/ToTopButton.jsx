import React from "react";
import { useState, useEffect } from "react";
import "./ToTopButton.css";
import up from "./../../img/up.png";

export default function ToTopButton() {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    const scrollEventListener = () => {
      if (window.scrollY > 500) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    };

    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
    
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <button className="toTop fa-solid fa-angle-up" onClick={scrollUp}>
          <img src={up} alt="toTop" />
        </button>
      )}
    </div>
  );
}

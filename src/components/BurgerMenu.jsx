import { useState } from "react";
import "../css/BurgerMenu.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="burger-menu column align-center"
        onClick={handleMenuClick}
      >
        <div className={`line line-1 ${isOpen ? "active" : ""}`} />
        <div className={`line line-2 ${isOpen ? "active" : ""}`} />
        <div className={`line line-3 ${isOpen ? "active" : ""}`} />
      </div>
      <nav
        className={`nav flex column align-center justify-center ${
          isOpen ? "open" : ""
        }`}
      >
        <ul className="flex column align-center justify-center">
          <li>
            <a onClick={handleMenuClick} href="#top">
              About Me
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#MyStack">
              My Tech Stack
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#Studies">
              My Studies
            </a>
          </li>
          <li>  
            <a onClick={handleMenuClick} href="#Projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#Contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;

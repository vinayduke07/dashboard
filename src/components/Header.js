import React from "react";
import "./Header.css";
import { RiUserFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">HO KEN</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="user-menu h-5">
        <RiUserFill />
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          BookMarkT
        </a>
        <nav className="navbar">
          <SearchBar />
          <a href="/">Sepet</a>
          <a href="/login">
            Giris Yap
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { BasketContext } from "../Context/BasketContext";

const Navbar = () => {
	const {user, logoutUser} = useContext(UserContext);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          BookMarkT
        </a>
        <nav className="navbar">
          <SearchBar />
          <a href="/basket">Sepet</a>
          {user ? (<a href="/" onClick={logoutUser}>
			Cikis yap
		  </a>) : 
		  (<a href="/login">
            Giris Yap
          </a>)}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

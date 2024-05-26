import React, { useState, useContext } from "react";
import "./SearchBar.css";
import { BookContext } from "../Context/BookContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { filterBook } = useContext(BookContext);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    //filtreleme islemi gelicek
    filterBook(value);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
	<div className="search-bar">
	<button className="search-icon" onClick={handleClick}>
	  <FaSearch />
	</button>
	<input
	  type="text"
	  placeholder="Arama yap..."
	  value={searchTerm}
	  onChange={handleChange}
	  className={`search-input ${expanded ? "expanded" : ""}`}
	/>
  </div>
  );
};

export default SearchBar;

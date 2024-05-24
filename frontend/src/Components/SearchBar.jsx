import React, {useState, useContext} from "react";
import "./SearchBar.css";
import { BookContext } from "../Context/BookContext";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { filterBook } = useContext(BookContext);

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		//filtreleme islemi gelicek
		filterBook(value);
	}

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Kitap Ara"
				value={searchTerm}
				onChange={handleChange}
				className="search-input"
			/>
		</div>
	);
}

export default SearchBar;
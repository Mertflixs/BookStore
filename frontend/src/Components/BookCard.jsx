import React from "react";
import "./BookCard.css";
import { useNavigate } from "react-router-dom";

const BookCard = ({book}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		console.log(book);
		navigate(`/book/${book.id}`, {state: {book}});
	}

	return (
		<div className="book-card" onClick={handleClick}>
			<img src={book.thumbnailurl} />
			<div className="book-info">
				<p className="title">{book.title}</p>
				<p className="price">{book.price} TL</p>
			</div>
				<button className="buy">Sepete Ekle</button>
		</div>
	);
};

export default BookCard;
import React from "react";
import "./BookCard.css";

const BookCard = ({book}) => {
	return (
		<div className="book-card">
			<img src={book.thumbnailurl} />
			<div className="book-info">
				<p className="title">{book.title}</p>
				<p className="price">{book.price} TL</p>
			</div>
		</div>
	);
};

export default BookCard;
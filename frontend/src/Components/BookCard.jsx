import React, { useContext } from "react";
import "./BookCard.css";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../Context/BasketContext";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const { addToBasket } = useContext(BasketContext);

  const handleClick = () => {
    console.log(book);
    navigate(`/book/${book.id}`, { state: { book } });
  };

  const handleToBasket = (e) => {
    e.stopPropagation();
    addToBasket(book);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <img src={book.thumbnailurl} alt={book.title} />
      <div className="book-info">
        <p className="title">{book.title}</p>
        <p className="price">{book.price} TL</p>
      </div>
      <button className="buy" onClick={handleToBasket}>
        Sepete Ekle
      </button>
    </div>
  );
};

export default BookCard;

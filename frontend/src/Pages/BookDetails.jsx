import React from "react";
import { useLocation } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state;

  console.log(book);
  return (
    <div className="book-details-container">
      <div className="book-details-0">
        <div className="book-image">
          <img src={book.thumbnailurl} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <p className="authors">Yazarlar: {book.authors.join(", ")}</p>
		  <p className="categories">Konusu: {book.categories.join(", ")}</p>
          <p className="pageCount">Sayfa Sayisi: {book.pagecount}</p>
          <p className="price">Fiyat: {book.price} TL</p>
          <button>Satin Al</button>
        </div>
      </div>
      <div className="book-description">
        <h2>Kitap Hakkinda</h2>
        <p>{book.longdescription}</p>
      </div>
    </div>
  );
};

export default BookDetails;

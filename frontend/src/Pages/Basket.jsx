import React, { useContext, useState, useEffect } from "react";
import "./Basket.css";
import { BasketContext } from "../Context/BasketContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import Notification from "../Components/Alert";

const BasketPage = () => {
  const { basketBook, removeFromBasket, clearBasket } =
    useContext(BasketContext);
  const [quantities, setQuantities] = useState({});
  const [uniqueBooks, setUniqueBooks] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const initialQuantities = {};
    const uniqueBooksList = [];
    basketBook.forEach((book) => {
      if (!initialQuantities[book.id]) {
        initialQuantities[book.id] = 0;
        uniqueBooksList.push(book);
      }
      initialQuantities[book.id] += 1;
    });
    setQuantities(initialQuantities);
    setUniqueBooks(uniqueBooksList);
  }, [basketBook]);

  const totalPrice = uniqueBooks
    .reduce((total, item) => {
      return total + parseFloat(item.price) * quantities[item.id];
    }, 0)
    .toFixed(2);

  const handleRemove = (bookId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[bookId] > 1) {
        updatedQuantities[bookId] -= 1;
      } else {
        delete updatedQuantities[bookId];
        removeFromBasket(bookId);
      }
      return updatedQuantities;
    });
  };

  const handleAdd = (bookId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[bookId] < 10) {
        updatedQuantities[bookId] += 1;
      }
      return updatedQuantities;
    });
  };

  const handleClearBasket = () => {
    clearBasket();
    setQuantities({});
    setUniqueBooks([]);
  };

  const handleBuyClick = () => {
	setShowNotification(true);
	clearBasket();
    setQuantities({});
    setUniqueBooks([]);
	setTimeout(() => {
		setShowNotification(false);
	}, 2000);
  };

  return (
    <div className="basket-container">
      <div className="basket-page">
        <h2>Sepetim</h2>
        <div className="basket-items">
          {uniqueBooks.map((item) => (
            <div key={item.id} className="basket-item">
              <div>
                <img src={item.thumbnailurl} alt={item.title} />
                <div className="book-details">
                  <p className="title">{item.title}</p>
                  <p className="price">
                    {parseFloat(item.price).toFixed(2)} TL
                  </p>
                  <p className="quantity">Adet: {quantities[item.id]}</p>
                </div>
              </div>
              <div className="basket-button">
                <button onClick={() => handleAdd(item.id)}>
                  <FaPlus />
                </button>
                <button onClick={() => handleRemove(item.id)}>
                  <FaMinus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="basket-summary">
        <button className="clear-button" onClick={handleClearBasket}>
          Bütün Kitapları temizle
        </button>
        <p>Toplam Fiyat: {totalPrice} TL</p>
        <button className="checkout-button" onClick={handleBuyClick}>
          Satın Al
        </button>
      </div>
	  {showNotification && <Notification message={"Satin alim islemi basarili olmustur."} />}
    </div>
  );
};

export default BasketPage;

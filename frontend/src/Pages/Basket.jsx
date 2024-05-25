import React, { useContext } from "react";
import "./Basket.css";
import { BasketContext } from "../Context/BasketContext";

const BasketPage = () => {
  const { basketBook } = useContext(BasketContext);

  const totalPrice = basketBook.reduce((total, item) => total + item.price, 0);

  return (
    <div className="basket">
      <h2>Sepet</h2>
      <div className="basket-items">
        {basketBook.map((item, index) => (
          <div key={index} className="basket-item">
            <img src={item.thumbnailurl} alt={item.title} />
            <div className="item-info">
              <p className="title">{item.title}</p>
              <p className="price">{item.price} TL</p>
              <button>Kaldır</button>
            </div>
          </div>
        ))}
      </div>
      <p className="total-price">Toplam Fiyat: {totalPrice} TL</p>
      <button className="buy-button">Satın Al</button>
    </div>
  );
};

export default BasketPage;

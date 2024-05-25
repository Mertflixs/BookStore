import { useState, useEffect, createContext } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [basketBook, setBasketBook] = useState(() => {
    const savedBasket = localStorage.getItem("BasketBook");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("BasketBook", JSON.stringify(basketBook));
    console.log("basketBook updated:", basketBook);
  }, [basketBook]);

  const addToBasket = (book) => {
    setBasketBook((prevBasket) => [...prevBasket, book]);
  };

  return (
    <BasketContext.Provider
      value={{
        basketBook,
        addToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

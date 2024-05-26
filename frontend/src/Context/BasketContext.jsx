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

  const removeFromBasket = (bookId) => {
    setBasketBook((prevBasket) => {
      const bookIndex = prevBasket.findIndex((book) => book.id === bookId);
      if (bookIndex === -1) return prevBasket;

      const updatedBasket = [...prevBasket];
      updatedBasket.splice(bookIndex, 1);

      return updatedBasket;
    });
  };

  const clearBasket = () => {
    setBasketBook([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basketBook,
        addToBasket,
		removeFromBasket,
		clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

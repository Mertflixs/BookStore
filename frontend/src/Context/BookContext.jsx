import { useState, useEffect, createContext } from "react";
import { getRequest, baseUrl } from "../Service/Service";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [book, setBook] = useState(null);
  const [filteredBook, setFilteredBook] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await getRequest(`${baseUrl}/getBook`);

      if (res.error) {
        return console.log("Error fetching books: ", res);
      }
      setBook(res.rows);
      setFilteredBook(res.rows);
    };
    getUser();
  }, []);

  const filterBook = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredBook(book);
    } else {
      const filtered = book.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
	  setFilteredBook(filtered);
    }
  };

  localStorage.setItem("books", JSON.stringify(book));
  /*console.log(localStorage.getItem("books")); */

  return (
    <BookContext.Provider
      value={{
        book: filteredBook,
		filterBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

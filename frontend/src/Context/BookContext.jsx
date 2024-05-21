import { useCallback, useState, useEffect, createContext } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
	const [book, setBook] = useState(null);

	console.log("Book Context");

	return (
		<BookContext.Provider
			value={{
				book,
			}}
		>
			{children}
		</BookContext.Provider>
	);
};
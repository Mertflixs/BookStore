import { useCallback, useState, useEffect, createContext } from "react";
import { getRequest, baseUrl } from "../Service/Service";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
	const [book, setBook] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			const res = await getRequest(`${baseUrl}/getBook`);

			if (res.error) {
				return console.log("Error fetching books: ", res);
			}
			setBook(res.rows);
		};
		getUser();
	}, []);
	console.log(book);
	localStorage.setItem("books", JSON.stringify(book));
	/*console.log(localStorage.getItem("books")); */

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
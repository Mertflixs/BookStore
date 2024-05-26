import React, {useContext} from "react";
import { BookContext } from "../Context/BookContext";
import BookCard from "../Components/BookCard";
import "./Home.css";

const Home = () => {
	const {book} = useContext(BookContext);

	return(
		<div className="book-list">
			{
				book?.map(book => (
					<BookCard key={book.id} book={book} />
				))
			}
		</div>
	);
}

export default Home;
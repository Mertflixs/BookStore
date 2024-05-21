import React, {useContext, useState} from "react";
import { BookContext } from "../Context/BookContext";

const Home = () => {
	const {book} = useContext(BookContext);


	return(
		<div>
			<span>
				<a>Home Page</a>
			</span>
		</div>
	);
}

export default Home;
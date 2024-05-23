import React from "react";
import './Navbar.css';

const Navbar = () => {
	return (
		<header className="header">
			<a href="/" className="logo">Logo</a>
			<nav className="navbar">
				<a href="/">Sepet</a>
				<a href="/">Sign in</a>
			</nav>
		</header>
	);
}

export default Navbar;
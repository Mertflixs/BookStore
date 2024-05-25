import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { BookContextProvider } from "./Context/BookContext";
import { BasketContextProvider } from "./Context/BasketContext";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import BookDetails from "./Pages/BookDetails";
import LoginPage from "./Pages/Login";
import RegisterUser from "./Pages/Register";
import BasketPage from "./Pages/Basket";

function App() {
  const { user } = useContext(UserContext);

  return (
    <BookContextProvider>
      <BasketContextProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterUser />} />
			<Route path="/basket" element={<BasketPage />} />
          </Routes>
        </Container>
      </BasketContextProvider>
    </BookContextProvider>
  );
}

export default App;

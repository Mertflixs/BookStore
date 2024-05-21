import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { BookContextProvider } from "./Context/BookContext";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  const { user } = useContext(UserContext);

  return (
    <BookContextProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BookContextProvider>
  );
}

export default App;

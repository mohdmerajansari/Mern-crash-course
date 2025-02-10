import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import EditProduct from "./pages/EditProduct";
import Card from "./pages/Card";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [bullet, setBullet] = useState(<WelcomeMessage />);
  const handleOnClick = () => {};
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;

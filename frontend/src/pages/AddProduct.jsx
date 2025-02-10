import { useState } from "react";
import styles from "./AddProduct.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleOnClick = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/products",
        { name, price, image },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setImage("");
      setPrice("");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <form className={styles.formpage} onSubmit={handleOnClick}>
        <h1 className="heading">Create new product</h1>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="price"
            className="form-control"
            id="price"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="image"
            className="form-control"
            id="image"
            placeholder="Product Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProduct;

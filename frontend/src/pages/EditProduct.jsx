import { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/products/${id}`
        );

        setName(data.data.name);
        setPrice(data.data.price);
        setImage(data.data.image);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching product data");
      }
    };
    fetchProduct();
  }, [id]);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/products/${id}`,
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
      <form className={styles.formpage} onSubmit={handleEdit}>
        <h1 className="heading">Edit product</h1>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Product Name"
            value={name}
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
            value={price}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Update Product
        </button>
      </form>
    </>
  );
};

export default EditProduct;

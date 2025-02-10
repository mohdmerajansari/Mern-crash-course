import "tailwindcss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        console.log("Server response:", response.data);
        // Check if response.data is an array, if not, access the correct property
        const products = response.data.data
          ? response.data.data
          : response.data.data || [];
        console.log("Processed products:", products);
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);
  if (!data || !Array.isArray(data)) return <div>No products available</div>;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      // Update the UI by removing the deleted item
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <div
          key={item._id}
          className="card shadow-lg rounded-lg overflow-hidden"
          style={{ width: "250px" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
            className="w-full h-48 object-cover"
            alt={item.name || "Product"}
            style={{ width: "250px" }}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-700">
              ${item.price || "Price not available"}
            </p>
            <div className="mt-4 flex justify-between">
              <Link
                to={`/edit/${item._id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Edit
              </Link>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

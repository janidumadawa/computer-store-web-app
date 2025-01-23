import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/showproduct.css";


const Showproducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1000/product/getproduct")
      .then((r) => {
        console.log(r.data); // Add this line to debug
        setProducts(r.data.products || []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:1000/product/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
        alert("Product deleted successfully!");
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updateproduct/${id}`);
  };

  return (
    <div className="show-product-container">
      <h1>Product Page</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Details</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.pname}</td>
              <td>${product.price}</td>
              <td>{product.details}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(product._id)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-panel-button">
        <Link to="/addproduct">Add Product</Link>
      </div>

      <div className="admin-panel-button2">
          <Link to="/adminhome">Back to Admin Page</Link>
        </div>

    </div>
  );
};

export default Showproducts;
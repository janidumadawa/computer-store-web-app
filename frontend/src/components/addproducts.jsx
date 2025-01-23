import { useState } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import "../CSS/addproduct.css";


const Addproduct = () => {
  const navigate = useNavigate();

  const [pname, setpname] = useState("");
  const [price, setprice] = useState("");
  const [details, setdetails] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, "");
    setprice(numericValue);
  };

  const clickbtn = (e) => {
    e.preventDefault();

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    if (!category) {
      alert("Please select a category.");
      return;
    }

    if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const product = { pname, price, details, category, quantity };
    axios
      .post("http://localhost:1000/product/addproduct", product)
      .then((r) => {
        console.log(r.data);
        navigate("/showproduct"); 
      })
      .catch((e) => {
        console.log(e);
        alert("An error occurred while adding the product. Please try again.");
      });
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            onChange={(e) => setpname(e.target.value)}
            placeholder="Enter Product Name"
            required
          />
        </div>
        <div>
          <label>Product Price</label>
          <div className="price-input-container">
            <span>$</span>
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="Enter Product Price"
              required
            />
          </div>
        </div>
        <div>
          <label>Product Details</label>
          <input
            type="text"
            onChange={(e) => setdetails(e.target.value)}
            placeholder="Enter Product Details"
          />
        </div>
        <div>
          <label>Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="monitor">Monitor</option>
            <option value="harddrive">Hard Drive</option>
            <option value="ssd">SSD</option>
            <option value="ram">RAM</option>
            <option value="motherboard">Motherboard</option>
            <option value="processor">Processor</option>
            <option value="graphicscard">Graphics Card</option>
            <option value="powersupply">Power Supply</option>
          </select>
        </div>
        <div>
          <label>Product Quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Product Quantity"
            required
          />
        </div>
        <button onClick={clickbtn} type="submit">
          Add Product
        </button>
        <div className="admin-panel-button">
          <Link to="/showproduct">Show Products</Link>
        </div>

        <div className="admin-panel-button2">
          <Link to="/adminhome">Back to Admin Page </Link>
        </div>

      </form>
    </div>
    
  );
};

export default Addproduct;
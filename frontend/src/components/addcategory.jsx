import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import "../CSS/addcategory.css";

const AddCategory = () => {
  const navigate = useNavigate();

  const [cname, setCname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("active");

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setQuantity(numericValue);
  };

  const clickbtn = (e) => {
    e.preventDefault();

    if (!cname.trim()) {
      alert("Category name cannot be empty.");
      return;
    }

    if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const category = { cname, quantity ,status};

    axios
      .post("http://localhost:1000/category/addcategory", category)
      .then((r) => {
        console.log(r.data);
        navigate("/showcategory");
      })
      .catch((e) => {
        console.log(e);
        alert("An error occurred while adding the category. Please try again.");
      });
  };

  return (
    <div className="add-category-container">
      <h1>Add Category</h1>
      <form>
        <div>
          <label>Category Name</label>
          <input
            type="text"
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter Category Name"
            required
          />
        </div>
        <div>
          <label>Category Quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter Category Quantity"
            required
          />
        </div>
        <div>
          <label>Category Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button onClick={clickbtn} type="submit">
          Add Category
        </button>
      </form>
      <div className="admin-panel-button">
        <Link to="/showcategory">Show Category</Link>
      </div>

      <div className="admin-panel-button2">
          <Link to="/adminhome">Back to Admin Page</Link>
        </div>
    </div>
  );
};

export default AddCategory;

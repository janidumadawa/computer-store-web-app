import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/showcategory.css"; // Add corresponding CSS for the categories page

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories from the backend
  useEffect(() => {
    axios
      .get("http://localhost:1000/category/getcategory")
      .then((r) => {
        console.log(r.data); // Debug response
        setCategories(r.data.categories || []);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // Handle category deletion
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:1000/category/${id}`)
      .then(() => {
        setCategories(categories.filter((category) => category._id !== id));
        alert("Category deleted successfully!");
      })
      .catch((err) => {
        console.error("Error deleting category:", err);
      });
  };

  // Navigate to update category page
  const handleUpdate = (id) => {
    navigate(`/updatecategory/${id}`);
  };

  return (
    <div className="show-category-container">
      <h1>Category Page</h1>
      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.cname}</td>
              <td>{category.quantity}</td>
              <td>{category.status}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(category._id)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-panel-button">
        <Link to="/addcategory">Add Category</Link>
      </div>

      <div className="admin-panel-button2">
          <Link to="/adminhome">Back to Admin Page</Link>
        </div>
    </div>
  );
};

export default ShowCategories;

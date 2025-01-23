import React from "react";
import "../CSS/adminhome.css";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <div className="blur-box admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin Panel. Manage products, categories, and more!</p>
      </div>

      <div className="admin-content">
        <div className="blur-box admin-tools">
          <div className="tool">
            <h3>Product Management</h3>
            <ul>
              <li><a href="/addproduct" className="button-link">Add New Product</a></li>
              <li><a href="/showproduct" className="button-link">View Product</a></li>
            </ul>
          </div>

          <div className="tool">
            <h3>Category Management</h3>
            <ul>
              <li><a href="/addcategory" className="button-link">Add New Category</a></li>
              <li><a href="/showcategory" className="button-link">View Categories</a></li>
            </ul>
          </div>

          <div className="tool">
            <h3>Staff Management</h3>
            <ul>
              <li><a href="/addStaff" className="button-link">Add Staff Member</a></li>
              <li><a href="/showstaff" className="button-link">View Staff</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" admin-panel-button3">
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default AdminHome;

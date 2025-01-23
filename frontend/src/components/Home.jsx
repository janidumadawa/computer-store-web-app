import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css"; // Include the styling for the home page

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Janidu Computers</h1>
        <p>
          Your one-stop destination for all computer hardware needs.<br/> 
          From high-performance gaming PCs to reliable office setups, we have the
          best products at unbeatable prices.<br/> Explore our wide range of products
          and find the perfect components for your next build.
        </p>
      </div>
      <div className="admin-panel-button">
        <Link to="/adminLogin">Admin Panel</Link>
      </div>
    </div>
  );
};

export default Home;

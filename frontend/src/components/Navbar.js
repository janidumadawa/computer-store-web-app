import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isProductManagementOpen, setIsProductManagementOpen] = useState(true); // State to manage Product Management dropdown
  const [isCategoryManagementOpen, setIsCategoryManagementOpen] = useState(true); // State to manage Category Management dropdown

  const toggleProductManagement = () => {
    setIsProductManagementOpen(!isProductManagementOpen); // Toggle Product Management dropdown
  };

  const toggleCategoryManagement = () => {
    setIsCategoryManagementOpen(!isCategoryManagementOpen); // Toggle Category Management dropdown
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {/* Product Management Section */}
        <li style={styles.li}>
          <div style={styles.sectionHeader} onClick={toggleProductManagement}>
            Product Management
            <span
              style={{
                ...styles.arrow,
                transform: isProductManagementOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </div>
          {isProductManagementOpen && (
            <ul style={styles.nestedUl}>
              <li style={styles.nestedLi}>
                <Link to="/addproduct" style={styles.link}>
                  Add Product
                </Link>
              </li>
              <li style={styles.nestedLi}>
                <Link to="/showproduct" style={styles.link}>
                  Show Products
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Category Management Section */}
        <li style={styles.li}>
          <div style={styles.sectionHeader} onClick={toggleCategoryManagement}>
            Category Management
            <span
              style={{
                ...styles.arrow,
                transform: isCategoryManagementOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </div>
          {isCategoryManagementOpen && (
            <ul style={styles.nestedUl}>
              <li style={styles.nestedLi}>
                <Link to="/addcategory" style={styles.link}>
                  Add Category
                </Link>
              </li>
              <li style={styles.nestedLi}>
                <Link to="/showcategory" style={styles.link}>
                  Show Categories
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333", // Dark background for the sidebar
    width: "200px", // Fixed width for the sidebar
    height: "100vh", // Full height of the viewport
    position: "fixed", // Fixed position to keep it on the left
    top: 0,
    left: 0,
    padding: "20px 0", // Padding for top and bottom
  },
  ul: {
    listStyleType: "none", // Remove bullet points
    margin: 0,
    padding: 0,
  },
  li: {
    margin: "15px 0", // Space between navigation items
  },
  sectionHeader: {
    color: "#fff", // White text color
    fontSize: "18px", // Font size
    padding: "10px 20px", // Padding for clickable area
    cursor: "pointer", // Show pointer on hover
    fontWeight: "bold", // Bold text for section header
    borderRadius: "4px", // Rounded corners
    transition: "background-color 0.3s", // Smooth hover effect
    display: "flex", // Use flexbox to align items
    justifyContent: "space-between", // Space between text and arrow
    alignItems: "center", // Center items vertically
  },
  nestedUl: {
    listStyleType: "none", // Remove bullet points for nested list
    margin: 0,
    padding: 0,
    paddingLeft: "20px", // Indent nested links
  },
  nestedLi: {
    margin: "10px 0", // Space between nested links
  },
  link: {
    color: "#fff", // White text color
    textDecoration: "none", // Remove underline
    fontSize: "16px", // Font size
    padding: "8px 20px", // Padding for clickable area
    display: "block", // Make the entire area clickable
    borderRadius: "4px", // Rounded corners
    transition: "background-color 0.3s", // Smooth hover effect
  },
  arrow: {
    fontSize: "14px", // Size of the arrow
    transition: "transform 0.3s", // Smooth rotation animation
  },
};

export default Navbar;

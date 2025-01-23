import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/updateproduct.css";

const Updateproduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pname, setpname] = useState("");
  const [price, setprice] = useState("");
  const [details, setdetails] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1000/product/${id}`)
      .then((r) => {
        const product = r.data.product;
        setpname(product.pname);
        setprice(product.price);
        setdetails(product.details);
        setCategory(product.category);
        setQuantity(product.quantity);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  const clickbtn = (e) => {
    e.preventDefault();
    const updateproduct = { pname, price, details, category, quantity };
    axios
      .put(`http://localhost:1000/product/${id}`, updateproduct)
      .then(() => {
        navigate("/showproduct");
      })
      .catch((e) => {
        console.log("Error in updating", e);
      });
  };

  return (
    <div className="update-product-container">
      <h1>Update Product</h1>
      <form>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={pname}
            onChange={(e) => setpname(e.target.value)}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div>
          <label>Product Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          />
        </div>
        <div>
          <label>Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
          />
        </div>
        <button onClick={clickbtn}>Update Product</button>
      </form>
    </div>
  );
};

export default Updateproduct;
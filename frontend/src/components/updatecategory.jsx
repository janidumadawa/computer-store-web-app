import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/updatecategory.css";

const UpdateCategory = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [cname, setCname] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("active");

    useEffect(() => {
        axios
            .get(`http://localhost:1000/category/${id}`)
            .then((r) => {
                const category = r.data.category;
                setCname(category.cname);
                setQuantity(category.quantity);
                setStatus(category.status);
            })
            .catch((err) => {
                console.error("Error fetching category:", err);
            });
    }, [id]);

    const clickbtn = (e) => {
        e.preventDefault();
        const updateCategory = { cname, quantity, status };
        axios
            .put(`http://localhost:1000/category/${id}`, updateCategory)
            .then(() => {
                navigate("/showcategory");
            })
            .catch((e) => {
                console.log("Error in updating", e);
            });
    };

    return (
        <div className="update-category-container">
            <h1 className="form-title">Update Category</h1>
            <form className="update-category-form">
                <div className="form-group">
                    <label htmlFor="cname" className="form-label">Category Name</label>
                    <input
                        type="text"
                        id="cname"
                        className="form-input"
                        value={cname}
                        onChange={(e) => setCname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity" className="form-label">Category Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        className="form-input"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status" className="form-label">Category Status</label>
                    <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button className="form-button" onClick={clickbtn}>
                    Update Category
                </button>
            </form> 
        </div>
    );
};

export default UpdateCategory;

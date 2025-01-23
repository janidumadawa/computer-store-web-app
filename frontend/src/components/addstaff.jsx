import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../CSS/addstaff.css";
import axios from 'axios';

const Addstaff = () => {

    const navigate = useNavigate();

    const [sname, setsname] = useState("");
    const [semail, setsemail] = useState("");
    const [snumber, setsnumber] = useState("");
    const [sdob, setsdob] = useState("");
    const [srole, setsrole] = useState("");
    const [sdoj, setsdoj] = useState("");

    const clickbtn = (e) =>{
        e.preventDefault();
    

    const staff = { sname, semail, snumber, sdob, srole, sdoj };
    axios.post("http://localhost:1000/staff/addstaff", staff)
    .then((r) =>{
        console.log(r.data);
        navigate("/showstaff");
    })
    .catch((e) =>{
        console.log(e);
        alert("An error occurred while adding the staff member. Please try again.");
    });

};
    

  return (
    <div className="add-staff-container">
        <h1>Add New Members</h1>
      
        <form>    

            <div>
                <label>Memebr Full Name</label>
                <input type="text" placeholder="Enter Name"
                onChange={(e) => setsname(e.target.value)}
                required /> 
            </div>

            <div>
                <label>Member Email</label>
                <input type="email" placeholder="Enter Email"
                onChange={(e) => setsemail(e.target.value)}
                required />
            </div>

            <div>
                <label>Mobile number</label>    
                <input type="text" placeholder="Enter Mobile number"
                onChange={(e) => setsnumber(e.target.value)}
                required />                
            </div>   

            <div>
                <label>Date of Birth</label>
                <input type="date" placeholder="Enter Birthday"
                onChange={(e) => setsdob(e.target.value)}
                required />
            </div>

            <div>
                <label>Role</label> <br />
                <label>
                    <input type="radio" name="role" value="Admin" onChange={(e) => setsrole(e.target.value)} required /> Admin
                </label>
                <label>
                    <input type="radio" name="role" value="Manager" onChange={(e) => setsrole(e.target.value)} required /> Manager
                </label>
                <label>
                    <input type="radio" name="role" value="Cashier" onChange={(e) => setsrole(e.target.value)} required /> Cashier
                </label>
                <label>
                    <input type="radio" name="role" value="Technician" onChange={(e) => setsrole(e.target.value)} required /> Technician
                </label>
            </div>

            <div>
                <label>Date of Joining</label>
                <input type="date" placeholder="Enter Joining Date"
                onChange={(e) => setsdoj(e.target.value)}
                required />
            </div>

            <div>
                <button type="submit" onClick={clickbtn}>Add Member</button>
            </div>

            <div className='admin-panel-button'>
                    <Link to="/showstaff">Show Members</Link>
            </div>
            <div className='admin-panel-button2'>
                    <Link to="/adminhome">Back Admin Page</Link>
            </div>
        </form>
    </div>
  );
};

export default Addstaff;

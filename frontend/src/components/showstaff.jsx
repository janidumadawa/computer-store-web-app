import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../CSS/showstaff.css'
import axios from 'axios';

const Showstaff = () => {
    const [staff, setStaff] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1000/staff/getstaff")
        .then((r) => {
            console.log(r.data);
            setStaff(r.data.staff || []);
        })
        .catch((err) => {
            console.error("Error fetching staff:", err);
        });
    }   , []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:1000/staff/${id}`)
        .then(() => {
            setStaff(staff.filter((staff) => staff._id !== id));
        })
        .catch((err) => {
            console.error("Error deleting staff member:", err);
        });
    }

    const handleUpdate = (id) => {
        navigate(`/updatestaff/${id}`);
    }

  return (
    <div className='show-staff-container'>
        <h1>Staff Details</h1>
        <table>
            <thead>
            <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>BirthDay</th>
                <th>Role</th>
                <th>Joining Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {staff.map((staff) => (
                <tr key={staff._id}>
                    <td>{staff.sname}</td>
                    <td>{staff.semail}</td>
                    <td>{staff.snumber}</td>
                    <td>{new Date(staff.sdob).toLocaleDateString()}</td> {/* Format DOB */}
                    <td>{staff.srole}</td>
                    <td>{new Date(staff.sdoj).toLocaleDateString()}</td> {/* Format Joining Date */}
                    <td>
                        <button className="update-btn" onClick={() => handleDelete(staff._id)}>Delete</button>
                        <button className="delete-btn" onClick={() => handleUpdate(staff._id)}>Update</button>
                    </td>
                </tr>
            ))}                
            </tbody>
            </table>
        <div className='admin-panel-button'>
            <Link to='/addStaff'>Add Staff Member</Link>
        </div>
        <div className='admin-panel-button2'>
            <Link to='/adminhome'>Back to Admin Page</Link>
        </div>
    </div>
  )
}

export default Showstaff

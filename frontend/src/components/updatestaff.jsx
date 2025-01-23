import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/updatestaff.css";

const Updatestaff = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [sname, setsname] = useState("");
    const [semail, setsemail] = useState("");
    const [snumber, setsnumber] = useState("");
    const [sdob, setsdob] = useState("");
    const [srole, setsrole] = useState("");
    const [sdoj, setsdoj] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:1000/staff/${id}`)
        .then((r) => {
            const staff = r.data.staff;
            setsname(staff.sname);
            setsemail(staff.semail);
            setsnumber(staff.snumber);
            setsdob(staff.sdob);
            setsrole(staff.srole);
            setsdoj(staff.sdoj);
        })
        .catch((e) => {
            console.log("Error fetching staff", e);
        });
    }, [id]);

    const clickbtn = (e) =>{
        e.preventDefault();
        const updatestaff = { sname, semail, snumber, sdob, srole, sdoj };
        axios.put(`http://localhost:1000/staff/${id}`, updatestaff)
        .then(() => {
            navigate("/showstaff");
        })
        .catch((e) => {
            console.log("Error in updating", e);
        });
    }

    
    return (
        <div className="update-staff-container">
            <h1>
                Update Members <br/><span className="small-id">Member ID : {id}</span>
            </h1>
          
            <form>    
    
                <div>
                    <label>Memebr Full Name</label>
                    <input type="text" value={sname} placeholder="Enter Full Name"
                    onChange={(e) => setsname(e.target.value)}
                    required /> 
                </div>
    
                <div>
                    <label>Member Email</label>
                    <input type="email" value={semail} placeholder="Enter Email"
                    onChange={(e) => setsemail(e.target.value)}
                    required />
                </div>
    
                <div>
                    <label>Mobile number</label>    
                    <input type="text" value={snumber} placeholder="Enter Mobile number"
                    onChange={(e) => setsnumber(e.target.value)}
                    required />                
                </div>   
    
                <div>
                <label>Date of Birth</label>
                <input 
                    type="date" 
                    value={sdob} 
                    placeholder="Enter Birthday"
                    onChange={(e) => setsdob(e.target.value)}
                    required 
                />
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
                    <input 
                        type="date" 
                        value={sdoj} 
                        placeholder="Enter Joining Date"
                        onChange={(e) => setsdoj(e.target.value)}
                        required 
                    />
                </div>
    
                <div>
                    <button type="submit" onClick={clickbtn}>Update Member</button>
                </div>
            </form>
        </div>
      );
    };
    
    export default Updatestaff;
    
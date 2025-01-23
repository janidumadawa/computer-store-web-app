import './App.css';
import Addproduct from './components/addproducts';
import Showproducts from './components/showproduct';
import Updateproduct from './components/updateproduct';
import Addcategory from './components/addcategory';
import ShowCategories from './components/showcategory';
import UpdateCategory from './components/updatecategory';
import Home from './components/Home';
import AdminHome from './components/Adminhome';
import Addstaff from './components/addstaff';
import Showstaff from './components/showstaff';
import AdminLogin from './components/logins/AdminLogin';
import RegisterAdmin from './components/logins/AdminRegister'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updatestaff from './components/updatestaff';

import "./index.css"; // Import the Tailwind CSS file


function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/adminhome" element={<div> <AdminHome /> </div>} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/showproduct" element={<Showproducts />} />
          <Route path="/updateproduct/:id" element={<Updateproduct />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/showcategory" element={<ShowCategories />} />
          <Route path="/updatecategory/:id" element={<UpdateCategory />} />
          <Route path="/addStaff" element={<Addstaff />} />
          <Route path="/showStaff" element={<Showstaff />} />
          <Route path="/updateStaff/:id" element={<Updatestaff />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/registerAdmin" element={<RegisterAdmin />} /> {/* Add RegisterAdmin route */}
          <Route path="/adminDashboard" element={<AdminHome />} /> {/* Add admin dashboard route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
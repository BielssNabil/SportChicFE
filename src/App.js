import './App.css';
import "./style/landingpage.css"
import "./style/comment.css"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Adidas from './pages/Adidas'
import Nike from './pages/Nike';
import Ortuseght from './pages/Ortuseght'
import Specs from './pages/Specs'
import Home from './pages/Home'
import Chekout from './pages/Chekout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/admin-content/Dashboard';
import ViewProduk from './components/admin-content/ViewProduct';
import AddProduct from './components/admin-content/AddProduct';
import EditProduct from './components/admin-content/EditProduct';
import ViewOrder from './components/admin-content/ViewOrder';
import ViewComment from './components/admin-content/ViewComment';
import AdminLogin from './components/adminAuth/AdminLogin';
import AdminRegister from './components/adminAuth/AdminRegister';
import Comment from './components/Comment';
import Thankyou from './components/ThankyouPage';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const App =() => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Nike' element={<Nike/>} />
        <Route path='/Adidas' element={<Adidas/>} />
        <Route path='/Ortuseght' element={<Ortuseght/>} />
        <Route path='/Specs' element={<Specs/>} />
        <Route path='/Chekout' element={<Chekout />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} /> 
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/admin/register" element={<AdminRegister/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/view-product" element={<ViewProduk/>} /> 
        <Route path="/admin/add-product" element={<AddProduct/>} /> 
        <Route path="/admin/edit-product/:id" element={<EditProduct/>} /> 
        <Route path="/admin/view-order" element={<ViewOrder/>} /> 
        <Route path="/admin/view-comment" element={<ViewComment/>} /> 
        <Route path="/comment" element={<Comment/>} /> 
        <Route path="/thankyoupage" element={<Thankyou/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

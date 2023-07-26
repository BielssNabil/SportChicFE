import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'

const Navbar = () => {
        
    const navigate = useNavigate()

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res =>{
            if(res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success",res.data.message,"success");
                navigate('/')
            }
        });
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <Link className="navbar-brand ps-3" to="/admin/dashboard">Admin Panel</Link>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown  justify-content-end">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#admin" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw">admin</i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#admin" onClick={logoutSubmit}>Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
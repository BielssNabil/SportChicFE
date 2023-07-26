import React from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";

function AddProduct() {

    const history = useNavigate();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/registerAdmin`, data).then(res =>{
                if(res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"success");
                    history('/admin/dashboard')
                } else {
                    setRegister({...registerInput, error_list: res.data.validation_errors });
                }
            })
        });
    }

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h4>Register Admin
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={registerSubmit} encType="multipart/form-data" >
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="form-group mb-3">
                                                    <label>Full Name</label>
                                                    <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control" />
                                                    <small className="text-danger">{registerInput.error_list.name}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Email</label>
                                                    <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
                                                    <small className="text-danger">{registerInput.error_list.email}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Password</label>
                                                    <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
                                                    <small className="text-danger">{registerInput.error_list.password}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success px-4 mt-2">Add Admin</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
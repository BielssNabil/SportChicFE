import React, { useEffect, useState } from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewProduct() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [viewProduct, setProduct] = useState([])

    useEffect(() => {
        axios.get(`/api/view-product`).then(res =>{
            if(res.data.status === 200) {
                setProduct(res.data.product);
                setLoading(false);
            }
        })
    }, [])
    

    var display_Productdata = "";

    if (loading) {
        return <h4>Loading View Product Loading...</h4>
    } else {
        display_Productdata = viewProduct.map( (item) => {

            const deleteProduct = (productId) => {
                axios.post(`/api/delete-product`, {
                    id: productId
                }).then(res => {
                    if (res.data.status === 200) {
                        // Remove the deleted product from the viewProduct state
                        setProduct(viewProduct.filter(item => item.id !== productId));
                        alert(res.data.message);
                    }
                }).catch(error => {
                    console.log(error);
                    alert('An error occurred while deleting the product.');
                });
            };

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category_id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><img src={`http://localhost:8000/${item.image}`} height="50px" width="100px" alt={item.name} align="center"/></td>
                    <td><button type="button" className="btn btn-warning btn-sm" onClick={() => navigate(`/admin/edit-product/${item.id}`)}>Edit</button></td>
                    <td><button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProduct(item.id)}>Delete</button></td>
                </tr>
            )
        } )
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
                            <div className="card px-4 mt-3">
                                <div className="card-header">
                                    <h4>View Product
                                        <Link to="/admin/add-product" className="btn btn-success btn-sm float-end">Add Product</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-stripe">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Category</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {display_Productdata}
                                            </tbody>
                                        </table>
                                    </div>
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

export default ViewProduct;
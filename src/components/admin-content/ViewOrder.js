import React, { useEffect, useState } from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewOrder() {

    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

    useEffect(() => {
        axios.get(`/api/view-order`).then(res =>{
            if(res.data.status === 200) {
                setOrder(res.data.orders);
                setLoading(false);
            }
        })
    }, [])

    var display_Order = "";

    if (loading) {
        return <h4>Loading View Product Loading...</h4>
    } else {
        display_Order = order.map( (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td>{item.state}</td>
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
                                    <h4>View Order</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-stripe">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>Country</th>
                                                    <th>State</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {display_Order}
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

export default ViewOrder;
import React, { useState, useEffect } from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import axios from 'axios';

function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [counts, setCounts] = useState({
        comments: 0,
        orders: 0,
        products: 0,
    });

    useEffect(() => {
        axios.get('/api/dashboard').then(response => {
            setCounts(response.data.counts);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
            setLoading(false)
        });
    }, []);

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="card">
                                        <div class="card-header">Orders</div>
                                        <div class="card-body">
                                            {loading ? (
                                                <div className="text-center">Loading</div>
                                            ) : (
                                                <div class="text-center">{counts.orders}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="card">
                                        <div class="card-header">Comments</div>
                                        <div class="card-body">
                                            {loading ? (
                                                <div className="text-center">Loading</div>
                                            ) : (
                                                <div class="text-center">{counts.comments}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="card">
                                        <div class="card-header">Products</div>
                                        <div class="card-body">
                                            {loading ? (
                                                <div className="text-center">Loading</div>
                                            ) : (
                                                <div class="text-center">{counts.products}</div>
                                            )}
                                        </div>
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

export default Dashboard;
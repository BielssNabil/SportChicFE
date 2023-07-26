import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import swal from 'sweetalert'

function ThankyouPage () 
{
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [viewProduct, setProduct] = useState([])

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

    const AuthButtons = localStorage.getItem('auth_token') ? (
        <ul className="navbar-nav">
            <Navbar.Text>
                <Button variant="outline-dark" onClick={logoutSubmit} >Logout</Button>
            </Navbar.Text>
        </ul>
    ) : (
        <ul className="navbar-nav">
            <Navbar.Text>
                <Button variant="outline-dark" onClick={() => navigate('/register')}>Sign In</Button>{' '}
            </Navbar.Text>
        </ul>
    );
    
    return (
        <div className="bgProduk">
            <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                    <Navbar.Brand href="/">SportChic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#brand">Categories</Nav.Link>
                            <Nav.Link href="#populer">Populer</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="/comment">Comment</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Collapse className="justify-content-end">
                                {AuthButtons}
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <Container>
                <br />
                <br />
                <h1 id="populer" className="title text-center text-white">Thank You For Ordering!</h1>
                <br />
            </Container>
            
        </div>
        
    )
}

export default ThankyouPage
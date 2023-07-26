import React, { useEffect, useState } from 'react'
import { Card, Container, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap"
import {  useNavigate } from "react-router-dom"
import axios from 'axios'
import swal from 'sweetalert'

const AdidasComponents = () => {
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

    useEffect(() => {
        axios.get(`/api/view-adidas`).then(res =>{
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
            return (
                <Col md={3} className="produkWrapper mt-3" key={item.id}>
                    <Card className="text-dark produkImg">
                        <Image src={`http://localhost:8000/${item.image}`} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                                <Card.Title>{item.name}</Card.Title>
                                <small>{item.description}</small>
                                <Card.Text>Rp. {item.price}</Card.Text>
                                <div>
                                    <Button variant="success" onClick={() => navigate('/chekout', { state: { product: item } })} className="width: 100%">BUY</Button>
                                </div>
                            </div>
                        </div>  
                    </Card>
                </Col>
            )
        } )
    }
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
                <h1 id="populer" className="title text-center text-white">Adidas</h1>
                <br />
                <Row>
                  {display_Productdata}
                </Row>
            </Container>
            
        </div>
        
    )
}

export default AdidasComponents
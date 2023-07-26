import React from "react";
import { Card, Container, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import swal from "sweetalert";

function Comment () 
{
    const history = useNavigate();
    const navigate = useNavigate();
    
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

    const [error, setError] = useState([]);
    const [comment, setComment] = useState({
        email: '',
        username: '',
        comment: '',
    });

    const handleInput = (e) => {
        e.persist();
        setComment({...comment, [e.target.name]: e.target.value });
    }

    const commentSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: comment.email,
            username: comment.username,
            comment: comment.comment,
        }

        axios.post('/api/comment', data).then(res =>{
            if(res.data.status === 200) {
              swal("Comment Has Been Sent",res.data.message,"success");
              history('/comment')
            } else if (res.data.status === 422){
              swal("Please Fill All the Data","","error");
              setError(res.data.error);
            } 
        });
    }

    const [loading, setLoading] = useState(true)
    const [viewComment, setViewComment] = useState([])

    useEffect(() => {
        axios.get(`/api/view-comment`).then(res =>{
            if(res.data.status === 200) {
                setViewComment(res.data.comments);
                setLoading(false);
            }
        })
    }, [])

    var display_Comment = "";

    if (loading) {
        return <h4>Loading...</h4>
    } else {
        display_Comment = viewComment.map( (item) => {
            return (
                <div className="comment col-lg-12" key={item.id}>
                    <div className="comment-top">
                        <div class="d-flex justify-content-between">
                            <div>
                                <p>{item.username}</p>
                                <small>{item.email}</small>
                            </div>
                        </div>
                    </div>
                    <div className="comment-mid">
                        <div>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                </div>
            )
        } )
    }

    return (
        <div className="bgProduk">
            <Navbar collapseOnSelect expand="lg" variant="light" >
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
                <h1 id="populer" className="title text-center text-white">Comment Section</h1>
                <br />
                <Row>
                    <Col>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={commentSubmit}>
                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" onChange={handleInput} value={comment.username} className="form-control"/>
                                    <span>{error.username}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={handleInput} value={comment.email} className="form-control" />
                                    <span>{error.email}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Comment</label>
                                    <input type="textArea" name="comment" onChange={handleInput} value={comment.comment} className="form-control"/>
                                    <span>{error.comment}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-success">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {display_Comment}
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Comment
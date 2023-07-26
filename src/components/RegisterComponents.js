import { Card, Container, Form, Row, Col, Image, Button } from "react-bootstrap"
import brandImage from "../assets/images/shoes #2/sptu5 -nike-.png"
import brandImage2 from "../assets/images/shoes/shoes2.png"
import brandImage3 from "../assets/images/shoes/shoes3.png"
import brandImage4 from "../assets/images/shoes #2/sptu4 -nike-.png"
import { useNavigate } from "react-router-dom"

const RegisterComponents = () => {
    const navigate = useNavigate()
    return (
        <div className="myBG">
            <Container>
                <br />
                <br />
                
                <Row>
                    
                    <Col md={6} className="produkWrapper">
                        <Form className="login">
                        <h1 className="text-center">Welcome</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={() => navigate('/login')}>
                            Login
                        </Button>
                        
                        </Form>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default RegisterComponents
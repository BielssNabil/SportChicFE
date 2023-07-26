import { Card, Container, Form, Row, Col, Image, Button } from "react-bootstrap"
import brandImage from "../assets/images/shoes #2/sptu5 -nike-.png"
import brandImage2 from "../assets/images/shoes/shoes2.png"
import brandImage3 from "../assets/images/shoes/shoes3.png"
import brandImage4 from "../assets/images/shoes #2/sptu4 -nike-.png"
import { Link, useNavigate } from "react-router-dom"

const LoginComponents = () => {
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={() => navigate('/')}>
                            Login
                        </Button>
                        <br/>
                        <br/>
                        <div onClick={() => navigate('/register')}>
                        Don’t have an account? <Link>Register Now</Link>
                        </div>
                        
                        </Form>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default LoginComponents


// import styled from 'styled-components';

// export const Container = styled.div`
// background-color:#fff;
// border-radius: 10px;
// box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
// ovweflow: hidden;
// max-width: 100%;
// min-height: 400px;
// `;

// export const SignUpContainer = styled.div`
// position: absoulute;
// top: 0;
// height: 100%;
// transition: all 0.6s ease-in-out;
// left: 0;
// width: 50%;
// opacity: 0;
// z-index: 1;
// ${props => (props.signinIn !== true ?
//     transform: translateX[100%];
//     opacity: 1;
//     z-index; 5;
//     `
//     : null}
// `;

// export const SignInContainer = styled.div`
// position: absolute;
// top: 0;
// height: 100%;
// transition: all 0.6s ease-in-out;
// left: 0;
// width: 50%;
// z-index: 1;
// ${props => (props.signinIn !== true ?
//     `transform: translateX(100%);` : null)}
// `;

// export const Form = styled.form`
// background: #fffff;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// padding: 0 50px;
// height: 100%;
// text-align: center;
// `;

// export const Title = styled.title.h1`
// font-weight: bold;
// margin: 0;
// `;

// export const Input = styled.Input`
// background-color: #eee;
// border: none;
// padding: 12px 15px;
// margin: 8px 0;
// width: 100%;
// `;

// export const Button = styled.button`
// border-radius: 20px;
// border: 1px solid #ff4b2b;
// background-color: #ff4b2b;
// color: #ffffff;
// font-size: 12px;
// font-weight: bold;
// padding: 12px 45px;
// letter-spacin: 1px;
// text-transform: uppercase;
// transition: transform 80ms case-in;
// &:active{
//     transform: scale(0.95);
// }
// &:focus{
//     outline: none;
// }
// `;

// export const GhostButton = styled.[Button]`
// background-color: transparent;
// border-color: #ffffff;
// `;

// export const Anchor = styled.a `
// color: #333;
// font-size: 14px;
// text-decoration: none;
// margin 15px 0;;
// `;

// export const OverLayContainer = styled.div`
// position: absolute;
// top: 0;
// left: 50%;
// width: 100%;
// overflow: hidden;
// transition: transform 0.6s ease-in-out;
// z-index: 100;
// ${props => props.signinIn !== true ? `transform: translateX(-100%);` : null}
// `;

// export const OverLay = styled.div`
// background: #ff416c;
// background -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: 0 0;
// color; #ffffff;
// position: relative;
// left: -100%;
// height: 100%;
// width: 200%;
// transform: translateX(0);
// transition: transform
// `
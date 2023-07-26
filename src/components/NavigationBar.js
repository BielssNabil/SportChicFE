import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <div>
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
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button variant="outline-dark">SIGN IN</Button>{' '}
                </Navbar.Text>
                </Navbar.Collapse>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
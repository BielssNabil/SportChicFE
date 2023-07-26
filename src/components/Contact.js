import { Container, Row, Col, } from "react-bootstrap"

const Contact = () => {
    return (
        <div className="footer">
            <Container>
                <br/>
                <h1 className="footer text-dark mt-5" id="contact">SportChic</h1>
                <br/>
                <Row className="">
                    <Col md={4} className="produkWrapper produkImage" id="brand">
                    <h3>Page</h3>
                    <p>Home</p>
                    <p>Brand</p>
                    <p>About Us</p>
                    <p>Populer Product</p>
                    </Col>

                    <Col md={4} className="produkWrapper produkImage" id="brand">
                    <h3>Contact</h3>
                    <p>GMAIL        : sportchic@gmail.com</p>
                    <p>TWITTER      : @sportchicc</p>
                    <p>INSTAGRAM    : @sportchicc</p>
                    </Col>

                    <Col md={4} className="produkWrapper produkImage" id="brand">
                    <h3>Payment Method</h3>
                    <p>Pay Pal</p>
                    <p>Visa</p>
                    <p>Link</p>
                    <p>GPay</p>
                    </Col>

                    <h6 className="text-center">Copyright @2023 SportChic</h6>
                </Row>
                
            </Container>
        </div>
    )
}

export default Contact
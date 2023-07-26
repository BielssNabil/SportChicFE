import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import brandImage from "../assets/images/shoes/shoes1.png"
import brandImage2 from "../assets/images/shoes/shoes2.png"
import brandImage3 from "../assets/images/shoes/shoes3.png"
import brandImage4 from "../assets/images/shoes #2/sptu4 -nike-.png"

const Populer = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 id="populer">Populer Product</h1>
                <br />
                <Row>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success">--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage2} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success">--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage3} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success">--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success">--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default Populer
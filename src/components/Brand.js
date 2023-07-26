import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import iklanImage from "../assets/images/iklan.png"
import brandImage from "../assets/images/nike.png"
import brandImage2 from "../assets/images/adidas.png"
import brandImage3 from "../assets/images/ortuseight.png"
import brandImage4 from "../assets/images/specs.png"
import { useNavigate } from "react-router-dom"

const Brand = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center" id="brand">Choose By Brand</h1>
                <br/>
                <Row>
                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/nike')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage2} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/adidas')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage3} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/ortuseght')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage4} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/specs')}></Image>
                    </Col>

                    <Image src={iklanImage} className="mt-4"></Image>
                </Row>
            </Container>
        </div>
    )
}

export default Brand
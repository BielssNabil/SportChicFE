import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import brandImage from "../assets/images/shoes #2/sptu5 -nike-.png"

const About = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className="text-center" id="about">About Us</h1>
                <Row>
                    <Col md={6} className="produkWrapper">
                        <Image src={brandImage} alt="Card image" className="aboutImg" />
                    </Col>
                    <Col md={6} className="produkWrapper">
                        <div className="aboutText">
                            <div className="p-2 m-1">
                            <p>
                            At SportChic we offer a curated selection of the latest and greates sport shoe styles from the world’s most innovative brands. 
                            </p>
                            <p>
                            Our tea, of experienced byerd buyers scours the globe to find the best design and technologies, so that you can be sure that you’re getting the very best.
                            </p>
                            <p>
                            We’ve commited to bringing you the most stylish and unique sport shoe designs, so that you can show off your individuality and make statement on and off the field.
                            </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default About
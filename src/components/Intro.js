import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className="intro">
        <Container className="text-white text-left d-flex justify-content-left align-items-left">
          <Row>
            <Col>
              <div className="title">The Best Store Ever Of</div>
              <div className="title">Shoes In The World!</div>
              <div className="introButton mt-4 text-left">
                <Button variant="success">Get Started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro
import {Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
  return (
     <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
      <Row>
        <Col>
        <div className="title">No Money</div>
         <div className="title">But You Can Get The Film</div>
        </Col>
        <div className="introButton mt-4 text-center">
            <Button variant="dark">All The List</Button>
        </div>
      </Row>
      </Container>
    </div>
  )
}

export default Intro
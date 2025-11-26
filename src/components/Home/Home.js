import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <>
            <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <Row>
                    <Col>
                        <h1>Github Search</h1>
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Enter GitHub username"
                            aria-label="GitHub username"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { searchUsers } from '../../services/githubService';

function Home() {

    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Github Search';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) {
            setError('Username is required');
            return;
        }
        setError('');

        const data = await searchUsers(username);
        console.log(data);
    }

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
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3" value={username} onChange={(e) => setUsername(e.target.value)}>
                                <Form.Control
                                isInvalid={!!error}
                                placeholder="Enter GitHub username"
                                aria-label="GitHub username"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2" type="submit">
                                    Search
                                </Button>
                                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;
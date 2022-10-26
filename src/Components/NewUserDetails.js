

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";

export default function NewUserDetails(props) {
    return (<Container className="d-flex justify-content-center p-5">

        <Form className='rounded border p-3 m-2 bg-light'>
            <h3>New Profile Details</h3>
            <hr></hr>
            <Row>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control disabled name="email" defaultValue={props.firstName} />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control disabled name="email" defaultValue={props.lastName} />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control disabled name="email" defaultValue={props.gender} />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control disabled name="email" defaultValue={props.birthdate} />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control disabled name="email" defaultValue={props.email} />
                    </Form.Group>
                </Col>
            </Row>
            <hr></hr>
            <Form.Group className='d-flex flex-row-reverse'>
                <Button variant="primary" type="submit">
                    Create another new user
                </Button>
            </Form.Group>
        </Form>
    </Container>)

}
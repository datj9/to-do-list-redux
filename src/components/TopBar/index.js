import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class TopBar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={9}>
                        <Form>
                            <Row>
                                <Col xs={9}>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Add new to do' />
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Button className='w-100' type='submit'>
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={3}>
                        <Button className='w-100' variant='danger'>
                            Delete All To Dos
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TopBar;

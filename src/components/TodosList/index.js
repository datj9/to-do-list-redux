import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class TodosList extends Component {
    render() {
        return (
            <div className='container'>
                <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between'>
                        <div className='todo d-flex align-items-center'>Do something</div>
                        <Button variant='danger'>Delete</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between'>
                        <div className='todo d-flex align-items-center'>Do something else</div>
                        <Button variant='danger'>Delete</Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default TodosList;

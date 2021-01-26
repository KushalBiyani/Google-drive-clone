import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from "react-router-dom"

export default function AddDetails() {
    const userName = useRef();
    const phoneNumber = useRef();
    const { addDetails  } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const contactNumber = String(phoneNumber.current.value);
        console.log(contactNumber)
        console.log(typeof(contactNumber))
        try {
            setError('')
            setLoading(true)
            await addDetails(userName.current.value,contactNumber )
             history.push("/")
        } catch {
            setError(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex aling-item-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            {error && <Alert variant="danger"> {error} </Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='UserName'>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type='text' ref={userName} autoComplete="on" required />
                                </Form.Group>
                                <Form.Group id='phoneNumber'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='number' ref={phoneNumber}  required />
                                </Form.Group>
                                <Button disabled={loading} className='w-100' type='submit'>Next</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </>
    )
}


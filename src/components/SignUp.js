import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup  } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordConfirmRef.current.value !== passwordRef.current.value) {
            return setError("Password do not match")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/addDetails")
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
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} autoComplete="on" required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} autoComplete="current-password" required />
                                </Form.Group>
                                <Form.Group id='password-confirm'>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type='password' ref={passwordConfirmRef} autoComplete="current-password" required />
                                </Form.Group>
                                <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </Container>

        </>
    )
}


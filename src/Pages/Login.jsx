import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleLogin = () => {
        // Retrieve users from session storage
        const users = JSON.parse(sessionStorage.getItem('users')) || [];
    
        // Check if the entered credentials match stored credentials
        const user = users.find((u) => u.username === username && u.password === password);
    
        if (user) {
          console.log('User logged in:', user);
    
          // After successful login, navigate to the home page (or dashboard)
          navigate('/home');
        } else {
          alert('Invalid username or password');
        }
    };

    return (
        <Container>
            <h1>LOGIN</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
        
    );
};

export default Login;

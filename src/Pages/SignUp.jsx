import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
        const handleSubmit = (e) => {
            e.preventDefault();
        console.log(formData);
        navigate('/');
    };
    return(
        <Container>
            <h1>Registration Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>already have an account? <Link to="/Login">Login</Link></p>
            </Form>
        </Container>
    );
};

export default SignUp; 

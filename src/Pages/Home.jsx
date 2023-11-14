import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "../Styles/homestyle.css";


const Home = () => {
    return (
        <Container>
            <h1>WELCOME TO OUR WEBSITE</h1>
            <p>We are here to serve you</p>
            <Button variant="primary" type="submit">
                Get S+tarted
            </Button>
        </Container>

    )
}

export default Home;
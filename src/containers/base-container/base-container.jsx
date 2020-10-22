
import React, { Component } from 'react';
import './base-container.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class BaseContainer extends React.Component {

    render() {
        const {top} = this.props;

        return (
            <div className="base-container">
                <div className="top-row">
                    {top}
                </div>
                <Container>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Anteprima del articolo
                    </Card.Text>
                    <Button variant="primary">Leggi l'articolo completo</Button>
                </Card.Body>
                </Card>
                </Container>
            </div>
        )
    }
}
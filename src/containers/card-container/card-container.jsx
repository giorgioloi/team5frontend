import React from 'react';
import './card-container.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


export default class CardContainer extends React.Component {

    render() {

        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Titolo Articolo</Card.Title>
                        <Card.Text>
                            Anteprima del articolo
                    </Card.Text>
                        <Button variant="primary">Leggi l'articolo completo</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }


}
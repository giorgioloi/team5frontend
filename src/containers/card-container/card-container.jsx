import React from 'react';
import './card-container.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



export default class CardContainer extends React.Component {

    render() {
        let { title, body, imgurl } = this.props.article;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button variant="primary">Leggi l'articolo completo</Button>
                </Card.Body>
            </Card>
        )
    }


}
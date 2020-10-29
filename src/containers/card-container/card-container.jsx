import React from 'react';
import './card-container.css';
import Card from 'react-bootstrap/Card';
import Article from '../../pages/Article'
import {
    Switch,
    Redirect,
    Link
} from "react-router-dom";

export default class CardContainer extends React.Component {

    render() {
        let { _id, title, body, imgurl, tag, author } = this.props.article;
        const location = {
            pathname: "/articles/" + _id,
            state: {
                id: _id
            }
        };
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}...
                    </Card.Text>
                    <footer className="blockquote-footer">
                        Autore: {author}, Tag: {tag}
                    </footer>

                    <Link to={location} >Clicca qui!</Link>

                </Card.Body>
            </Card>



        )
    }


}
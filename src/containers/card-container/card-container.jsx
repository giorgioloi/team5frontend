import React from 'react';
import './card-container.css';
import Card from 'react-bootstrap/Card';
import {
    Link
} from "react-router-dom";

export default class CardContainer extends React.Component {

    render() {
        let { _id, title, body, imgurl, tag, author } = this.props.article;
        const l1 = {
            pathname: "/articles/" + _id,
            state: {
                id: _id
            }
        };
        return (
            <Card>
                <Card.Img variant="top" src={imgurl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}...
                    </Card.Text>
                    <footer className="blockquote-footer">
                        Autore: {author}, Tag: {tag}
                    </footer>

                    <Link to={l1} >Clicca qui!</Link>
                </Card.Body>
            </Card>



        )
    }


}
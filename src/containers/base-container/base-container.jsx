
import React from 'react';
import './base-container.css'
import Homepage from '../../pages/Homepage'
//import Article from '../../pages/Article'
import { Container } from 'react-bootstrap';
export default class BaseContainer extends React.Component {

    render() {
        const { top } = this.props;

        return (
            <div className="base-container">
                <div className="top-row">
                    {top}
                    <Container>
                        <Homepage />
                    </Container>
                </div>

            </div>
        )
    }
}
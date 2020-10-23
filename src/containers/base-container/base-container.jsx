
import React from 'react';
import './base-container.css';
import CardContainer from '../card-container/card-container'
export default class BaseContainer extends React.Component {

    render() {
        const { top } = this.props;

        return (
            <div className="base-container">
                <div className="top-row">
                    {top}
                    <CardContainer />
                </div>

            </div>
        )
    }
}
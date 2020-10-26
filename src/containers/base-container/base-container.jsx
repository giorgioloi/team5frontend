
import React from 'react';
import './base-container.css'
import Homepage from '../../pages/Homepage'
export default class BaseContainer extends React.Component {

    render() {
        const { top } = this.props;

        return (
            <div className="base-container">
                <div className="top-row">
                    {top}
                    <Homepage />
                </div>

            </div>
        )
    }
}
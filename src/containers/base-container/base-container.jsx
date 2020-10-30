import React from 'react';
import './base-container.css'
export default class BaseContainer extends React.Component {

    render() {
        const { top, content, location } = this.props;

        return (
            <div className="base-container">
                <div className="top-row">
                    {top}
                </div>
                {content}
            </div>
        )
    }
}
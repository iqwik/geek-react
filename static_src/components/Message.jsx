import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render(){
        return (
            <div className="message_item">
                <p>{ this.props.text }</p>
            </div>
        )
    }
}
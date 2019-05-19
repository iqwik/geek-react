import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    render(){
        return (
            <Chip
                style={{ margin: '5px', backgroundColor: '#f0f0f0' }}
                className={ this.props.sender === 'bot' ? 'bot_msg' : 'user_msg' }
            >{ this.props.text }
            </Chip>
        )
    }
}
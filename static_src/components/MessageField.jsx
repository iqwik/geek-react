import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions';
import connect from "react-redux/es/connect/connect";

class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.array.isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: ''
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSendMessage = (sender, text) => {
        if(text.length > 1) {
            this.setState({input: ''});
            this.props.sendMessage(this.props.chatId, sender, text);
        }
    };

    render(){
        const { messages, chats, chatId } = this.props;
        const messageElements = chats[chatId].messageList.map(
            (idx, index) => <Message key={ `${Date.now()}_${idx}_${index}` } text={ messages[idx].text } sender={ messages[idx].sender } />
        );
        return (
            <div>
                <div className="message_container">{ messageElements }</div>
                <TextField
                    label="Name"
                    underlineFocusStyle={{ borderColor: '#3f51b5' }}
                    name="input"
                    value={ this.state.input }
                    onChange={ this.handleInput }
                    placeholder="Введите сообщение"
                />
                <Button
                    onClick={ () => this.handleSendMessage('user', this.state.input) }
                    variant="contained"
                    color="primary"
                    size="small">
                    Жмякай!
                </Button>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
    messageList: messageReducer.messageList,
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
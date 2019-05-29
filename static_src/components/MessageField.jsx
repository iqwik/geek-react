import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions';
import connect from "react-redux/es/connect/connect";
import CircularProgress from 'material-ui/CircularProgress';

class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
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

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage('user', this.state.input);
        }
    };

    render(){
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { messages, chats, chatId } = this.props;
        const messageElements = chats[chatId].messageList.map(
            (element, index) => <Message key={ `${Date.now()}_${index}` } sender={ messages[element].sender } text={ messages[element].text } />
        );
        return (
            <div>
                <div className="message_container">{ messageElements }</div>
                <TextField
                    label="Name"
                    underlineFocusStyle={{ borderColor: '#3f51b5' }}
                    name="input"
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
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
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
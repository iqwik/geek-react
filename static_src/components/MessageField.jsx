import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

export default class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.array.isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number.isRequired,
        updateState: PropTypes.func.isRequired
    };

    state = {
        input: ''
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSendMessage = (sender, text) => {
        const { messageList, messages, nextId } = this.props;
        if(text.length > 1) {
            this.props.updateState([...messageList, nextId], {...messages, [nextId]: {sender, text}}, nextId + 1);
            this.setState({input: ''});
        }
    };

    render(){
        const { messageList, messages } = this.props;
        const messageElements = messageList.map(
            (idx, index) => <Message key={ `${Date.now()}_${idx}_${index}` } text={ messages[idx].text } />
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
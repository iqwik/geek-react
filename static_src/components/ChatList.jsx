import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import {List, ListItem} from 'material-ui/List';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import { loadChats } from '../actions/apiActions';
import CircularProgress from 'material-ui/CircularProgress';

class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chatList: PropTypes.array.isRequired,
        chats: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
        highlightedChat: PropTypes.number,
        loadChats: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        chatId: 1,
        highlightedChat: undefined,
    };

    componentDidMount() {
        this.props.loadChats();
    }

    handleClick = (chatId) => {
        this.props.push(`/chat/${chatId}/`);
    };

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { chatList, chats, highlightedChat } = this.props;
        const chatElements = chatList.map((chatId) =>
            <ListItem
                key={ chatId }
                primaryText={ chats[chatId].name }
                onClick={ () => this.handleClick(chatId) }
                style={ { backgroundColor: highlightedChat == chatId ? 'rgb(240, 240, 240)' : '' } }
            />);
        return (
            <div className="chat-list">
                <List>
                    { chatElements }
                </List>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chatList: chatReducer.chatList,
    chats: chatReducer.chats,
    highlightedChat: chatReducer.highlightedChat,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
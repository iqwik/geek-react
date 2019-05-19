import React from 'react';
import PropTypes from "prop-types";
import { push } from 'react-router-redux';
import {List, ListItem} from 'material-ui/List';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chatList: PropTypes.array.isRequired,
        chats: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    handleClick = (chatId) => {
        this.props.push(`/chat/${chatId}/`);
    };

    render() {
        const { chatList, chats } = this.props;

        const chatElements = chatList.map((chatId) =>
            <ListItem
                key={ chatId }
                primaryText={ chats[chatId].name }
                onClick={ () => this.handleClick(chatId) }
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
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import Grid from '@material-ui/core/Grid';

export default class Layout extends React.Component {
    state = {
        messageList: [1,2],
        messages: {1: {sender: 'user', text: 'test 1'}, 2: {sender: 'bot', text: 'test from bot'}},
        nextId: 3
    };

    updateState = (msgList, msg, msgId) => {
        this.setState({
            messageList: msgList,
            messages: msg,
            nextId: msgId
        })
    };

    render(){
        const {messageList, messages, nextId} = this.state;
        return (
            <div>
                <header>
                    <Header countMsg={messageList.length}/>
                </header>
                <Grid container spacing={8}>
                    <Grid container item xs={3}>
                        <ChatList />
                    </Grid>
                    <Grid container item xs={9}>
                        <MessageField
                            messageList={messageList}
                            messages={messages}
                            nextId={nextId}
                            updateState={this.updateState}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
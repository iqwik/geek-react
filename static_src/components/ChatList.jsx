import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class ChatList extends React.Component {
    render() {
        return (
            <div className="chat-list">
                <List>
                    <ListItem primaryText="chat #1"/>
                    <ListItem primaryText="chat #2"/>
                    <ListItem primaryText="chat #3"/>
                    <ListItem primaryText="chat #4"/>
                </List>
            </div>
        )
    }
}
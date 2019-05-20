import React from 'react';
import PropTypes from "prop-types";
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';
import Grid from '@material-ui/core/Grid';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render(){
        return (
            [
                <Header key="header"/>,
                <Grid container spacing={8} key="container">
                    <Grid container item xs={3}>
                        <ChatList />
                    </Grid>
                    <Grid container item xs={9}>
                        <MessageField chatId={ this.props.chatId } />
                    </Grid>
                </Grid>
            ]
        )
    }
}
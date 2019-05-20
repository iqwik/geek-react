import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chatList: [1, 2],
    chats: {1: { name: 'chat#1', messageList: [1, 2] }, 2: { name: 'chat#2', messageList: [] }},
    nextMessageId: 3,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { chatId } = action;
            const { chats, nextMessageId } = store;
            return update(store, {
                chats: { $merge: { [chatId]: {
                    name: chats[chatId].name,
                    messageList: [...chats[chatId].messageList, nextMessageId]
                } } },
                nextMessageId: { $set: nextMessageId + 1 },
            });
        }
        default:
            return store;
    }
}
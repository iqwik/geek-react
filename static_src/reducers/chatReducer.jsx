import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    chatList: [1, 2],
    chats: {1: { name: 'chat1', messageList: [1, 2] }, 2: { name: 'chat2', messageList: [] }},
    nextMessageId: 3,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    name: store.chats[action.chatId].name,
                    messageList: [...store.chats[action.chatId].messageList, store.nextMessageId]
                } } },
                nextMessageId: { $set: store.nextMessageId + 1 },
            });
        }
        default:
            return store;
    }
}
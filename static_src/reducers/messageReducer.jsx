import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messageList: [1,2],
    messages: {1: {sender: 'user', text: 'test 1'}, 2: {sender: 'bot', text: 'test from bot'}},
    nextId: 3,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageList, messages, nextId } = store;
            return update(store, {
                messageList: {$set: [...messageList, nextId]},
                messages: {$set: {...messages, [nextId]: {sender: action.sender, text: action.text}}},
                nextId: {$set: nextId + 1},
            });
        }
        default:
            return store;
    }
}
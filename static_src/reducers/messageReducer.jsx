import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import * as api from '../actions/apiActions';

const initialStore = {
    messages: {},
    nextId: 1,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messages, nextId } = store;
            return update(store, {
                messages: {$set: {...messages, [nextId]: {sender: action.sender, text: action.text}}},
                nextId: {$set: nextId + 1},
            });
        }
        case api.SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
                nextId: { $set: Object.keys(action.payload.entities.messages).length + 1 },
            });
        }
        default:
            return store;
    }
}
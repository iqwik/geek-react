import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { HIGHLIGHT_CHAT, UNHIGHLIGHT_CHAT } from '../actions/highlightChatAction';
import * as api from '../actions/apiActions';

const initialStore = {
    chatList: [],
    chats: {},
    nextMessageId: 1,
    highlightedChat: undefined,
    isLoading: true,
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
        case HIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: { $set: action.chatId },
            });
        }
        case UNHIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: { $set: undefined },
            });
        }
        case api.START_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case api.SUCCESS_CHATS_LOADING: {
            console.log(action.payload);
            return update(store, {
                chatList: { $set: action.payload.result },
                chats: { $set: action.payload.entities.chats },
                nextMessageId: { $set: Object.keys(action.payload.entities.messages).length + 1 },
                isLoading: { $set: false },
            });
        }
        case api.ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}
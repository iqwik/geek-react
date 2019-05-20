import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";
import { HIGHLIGHT_CHAT, highLightChat, unhighLightChat } from '../actions/highlightChatAction';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'user') {
                setTimeout(() => store.dispatch(sendMessage(action.chatId, 'bot', 'Привет я Робот, иди нафиг!')), 1000);
            }
        case HIGHLIGHT_CHAT:
            if (action.sender === 'bot') {
                store.dispatch(highLightChat(action.chatId));
            }
            setTimeout(() => store.dispatch(unhighLightChat()), 500);
            break;
    }
    return next(action)
}
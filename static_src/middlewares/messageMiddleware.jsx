import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'user') {
                setTimeout(() => store.dispatch(sendMessage(action.chatId, 'bot', 'Привет я Робот, иди нафиг!')), 500);
            }
        case HIGH:

    }
    return next(action)
}
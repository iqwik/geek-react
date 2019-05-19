export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (chatId, sender, text) => ({
    type: SEND_MESSAGE,
    chatId,
    sender,
    text,
});
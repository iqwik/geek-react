export const HIGHLIGHT_CHAT = '@@message/HIGHLIGHT_CHAT';

export const highLightChat = (chatId) => ({
    type: HIGHLIGHT_CHAT,
    chatId,
});

export const UNHIGHLIGHT_CHAT = '@@message/UNHIGHLIGHT_CHAT';

export const unhighLightChat = () => ({
    type: UNHIGHLIGHT_CHAT,
});
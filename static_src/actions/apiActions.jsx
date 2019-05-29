import { normalize } from 'normalizr';
import { CALL_API, getJSON } from 'redux-api-middleware';
import { chats } from '../utils/schemas';

export const START_CHATS_LOADING = '@@message/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@message/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@message/ERROR_CHATS_LOADING';

export const loadChats = () => ({
    [CALL_API]: {
        credentials: 'include',
        endpoint: '/json/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats]),
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    },
});

export const START_PROFILE_LOADING = '@@message/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@message/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@message/ERROR_PROFILE_LOADING';

export const loadProfile = () => ({
    [CALL_API]: {
        credentials: 'include',
        endpoint: '/json/profile.json',
        method: 'GET',
        types: [
            START_PROFILE_LOADING,
            {
                type: SUCCESS_PROFILE_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_PROFILE_LOADING,
        ],
    },
});
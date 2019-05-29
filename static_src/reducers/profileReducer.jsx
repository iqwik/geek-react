import update from 'react-addons-update';
import * as api from '../actions/apiActions';

const initialStore = {
    userId: 0,
    userName: ""
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case api.START_PROFILE_LOADING: {
            return store;
        }
        case api.SUCCESS_PROFILE_LOADING: {
            return update(store, {
                userId: { $set: action.payload.id },
                userName: { $set: action.payload.name }
            });
        }
        case api.ERROR_PROFILE_LOADING: {
            return store;
        }
        default:
            return store;
    }
}
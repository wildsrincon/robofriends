/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import CHANGE_SEARCH_FIELD from './constants';

const initialState = {
    searchField : ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case 1 :
        return Object.assign({}, state,
        searchField = action.payload);
        default:
            return state;
    }
}

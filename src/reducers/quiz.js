import {
    ACTION_TYPE_REQUEST,
    ACTION_TYPE_SUCCESS
} from '../constants/default'

const initialState = {
    id: 1,
    questions: [],
    results: [],
    fetching: false,
}

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE_REQUEST:
            return {
                ...state,
                path: action.payload,
                fetching: true
            }

        case ACTION_TYPE_SUCCESS:
            return {
                ...state,
                questions: action.payload,
                id: action.index,
                fetching: false
            }

        default:
            return state;
    }
}
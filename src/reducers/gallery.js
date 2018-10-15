import {
    GALLERY_ROOT_DIRECTORY,
    GALLERY_ACTION_TYPE_REQUEST,
    GALLERY_ACTION_TYPE_SUCCESS
} from '../constants/Gallery'

const initialState = {
    index: 1,
    title: 'winter',
    path: '/img/gallery/winter',
    items: [],
    fetching: false,
}

export default function gallery(state = initialState, action) {
    switch (action.type) {
        case GALLERY_ACTION_TYPE_REQUEST:
            return {
                ...state,
                path: action.payload,
                fetching: true
            }

        case GALLERY_ACTION_TYPE_SUCCESS:
            return {
                ...state,
                items: action.payload,
                title: action.title,
                index: action.index,
                fetching: false
            }

        default:
            return state;
    }
}
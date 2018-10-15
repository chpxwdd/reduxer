
import listReactFiles from 'list-react-files';
import {
    GALLERY_ROOT_DIRECTORY,
    GALLERY_ACTION_TYPE_REQUEST,
    GALLERY_ACTION_TYPE_SUCCESS
} from '../constants/Gallery';

/**
 * Loading images from <galleryPath>
 * 
 * @param {string} galleryPath 
 * @param {string} galleryTitle 
 * @param {number} galleryIndex
 */
export function getItems(galleryPath, galleryTitle, galleryIndex) {
    return (dispatch) => {
        dispatch({
            type: GALLERY_ACTION_TYPE_REQUEST,
            payload: galleryPath,
        })
        setTimeout(() => {
            dispatch({
                type: GALLERY_ACTION_TYPE_SUCCESS,
                payload: getGalleryItems(galleryPath),
                title: galleryTitle,
                index: galleryIndex,
                path: galleryPath
            })
        }, 1000)
    }
}



function getGalleryItems(galleryDir) {

    var dir = GALLERY_ROOT_DIRECTORY + galleryDir;
    var dir = './';

    

    return [1, 13, 14, 15, 155, 23, 21, "asdas", 2]

}
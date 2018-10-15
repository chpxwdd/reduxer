import {
    QUIZ_ACTION_TYPE_REQUEST,
    QUIZ_ACTION_TYPE_SUCCESS
} from '../constants/Quiz'



export function getItems(quizId) {
    return (dispatch) => {
        dispatch({
            type: QUIZ_ACTION_TYPE_REQUEST,
            payload: quizId,
        })
        setTimeout(() => {

            dispatch({
                type: QUIZ_ACTION_TYPE_SUCCESS,
                payload: getQuiz(quizId),
            })
        }, 1000)
    }
}

function getQuiz(quizId) {

    var quiz = {
        questions: {
            1: {
                text: 'would you like huy',
                variables: { 1: 'yes', 2: 'no' },
                answer: 1
            },
            2: {
                text: 'would you like more huys',
                variables: { 1: 'yes', 2: 'no' },
                answer: 1
            }
        }
    }

    return quiz;
}

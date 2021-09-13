import {allServices} from '../../services/service'
import {toast} from 'react-toastify'

const MODULE_NAME = '[STUDENT]'

export const ActionTypes = {
    STUDENT_NEW_FETCHING: MODULE_NAME + 'STUDENT_NEW_FETCHING',
    STUDENT_NEW_SUCCESS: MODULE_NAME + 'STUDENT_NEW_SUCCESS',
    STUDENT_NEW_FAILURE: MODULE_NAME + 'STUDENT_NEW_FAILURE',
}


export const action = data => dispatch => {
    console.log("dfassdafsfda",data)
    dispatch({
        type: ActionTypes.STUDENT_NEW_FETCHING
    })
    return allServices(data)
    .then ((response) => {
    if (response){
        dispatch({
            type:ActionTypes.STUDENT_NEW_SUCCESS
        })
    }
    return response
   })

    .catch(err => {
        dispatch ({
            type:ActionTypes.STUDENT_NEW_FAILURE
        })
        // error message
    })
}


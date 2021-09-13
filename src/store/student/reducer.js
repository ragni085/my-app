import { ActionType } from './action'

const initialState = {

}

const studentReducer = (state = initialState, action) => {
    const { type, payload } =action
    return state
}

export default studentReducer
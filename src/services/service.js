import axios from './config'
import endPoint from './endpoint'
import { successHandler, errorHandler } from './utils'



export const allServices = data => {
    return axios.post(endPoint.studentNew(), data)
    .then (response => {
        return successHandler(response).then(result => {
            return result
        })
    })
}
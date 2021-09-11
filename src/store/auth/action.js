export const action = data = distatch => {
    distatch({})
    return services(data)
    .then ((response) => {
    if (response){
        dispatch({})
    }
    return response
   })

    .catch(err => {
        dispatch ({})
        // error message
    })
}

export const allServices = data => {
    return axios.post(all(), data)
    .then (response => {
        return successHandler(response).then(result => {
            return result
        })
    })
}
 export const abc = data => {
     return axios.post(sdf(), data)
     .then(response => {
         return successHandler(response).then(result=> {
             return result
         })
     })
 }
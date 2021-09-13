export const successHandler = res => {
    return Promise.resolve(res.data)
}

export const errorHandler = error => {
    return Promise.reject(error.response && (error.response.data.errors || error.response.data.message))
}

export function validateMobile(mobilenumber) {   
    var regmm='^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
    var regmob = new RegExp(regmm);
    if(regmob.test(mobilenumber)){
        return true;
    } else {
        return false;
    }    
}
import axiosInstance from "./post";

export const getFormResponseListApi=(formId,successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/response/form-response/${formId}`)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((err)=>{
            errorCallback(err)
        })
    } catch (error) {
        
    }
}


export const createResponseApi=( data,successCallback, errorCallback)=>{
    console.log(data)
    try {
        axiosInstance.post("/response",data)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const createResponseFieldApi=( data,successCallback, errorCallback)=>{
    console.log(data)
    try {
        axiosInstance.post("/response-field",data)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}


export const getResponseDetailApi=(id,successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/response/form-response-one/${id}`)
        .then((res)=>{
            console.log(res.data)
            successCallback(res.data)
        }).catch((err)=>{
            errorCallback(err)
        })
    } catch (error) {
        
    }
}

export const getResponseDetailFieldsApi=(id,successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/response/form-response-one-fields/${id}`)
        .then((res)=>{
            console.log(res.data)
            successCallback(res.data)
        }).catch((err)=>{
            errorCallback(err)
        })
    } catch (error) {
        
    }
}
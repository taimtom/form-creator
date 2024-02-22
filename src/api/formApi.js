import axiosInstance from "./post";

export const getFormListApi=(successCallback, errorCallback)=>{
    try {
        axiosInstance.get("/forms")
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((err)=>{
            errorCallback(err)
        })
    } catch (error) {
        
    }
}

export const createFormApi=( data,successCallback, errorCallback)=>{
    console.log(data)
    try {
        axiosInstance.post("/forms",data)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const getFormDetailApi=(id, successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/forms/${id}`)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const getFormFieldsApi=(id, successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/forms/form-fields/${id}`)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const getOneFormFieldApi=(id, successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/forms/form-fields/${id}/get-detail`)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const createFormFieldApi=( data,successCallback, errorCallback)=>{
    console.log(data)
    try {
        axiosInstance.post("/forms/form-fields",data)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const deleteFormFieldApi=( id,successCallback, errorCallback)=>{
    try {
        axiosInstance.delete(`/forms/form-fields/${id}`)
        .then((res)=>{
successCallback(id)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const deleteFormApi=( id,successCallback, errorCallback)=>{
    try {
        axiosInstance.delete(`/forms/${id}`)
        .then((res)=>{
successCallback(id)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}
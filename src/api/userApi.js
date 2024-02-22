import axiosInstance from "./post";

export const getUserListApi=( successCallback, errorCallback)=>{
    try {
        axiosInstance.get("/users")
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}

export const getUserDetailApi=(id, successCallback, errorCallback)=>{
    try {
        axiosInstance.get(`/users/${id}`)
        .then((res)=>{
console.log(res.data)
successCallback(res.data)
        }).catch((error)=>errorCallback(error))
    } catch (error) {
        errorCallback(error)
    }
}
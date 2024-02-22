import axios from "axios";

export const baseURL = () => {
  if (window.location.hostname.includes("localhost")) {
    return "http://localhost:8000";
  } else if (window.location.hostname.includes("testfrt")) {
    return "https://testbck.smartdvm.com";
  } else {
    return "https://bck.uat.smartdvm.com";
  }
};

const axiosInstance = axios.create({
  baseURL: baseURL(),
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null,
    "ConTent-Type": "application/json",
    accept: "application/json",
  },
});


// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;
//     if (

//       originalRequest.url === "/api/token/refresh/"
//     ) {
//       return Promise.reject(error);
//     } else if (
//       error.response.status === 401 &&
//       originalRequest.url === "/api/token/"
//     ) {
//       Promise.reject(error);
//     } else if (
//       (error.response.status === 401 ||
//         error.response.status === 403 ||
//         error.response.status === 400) &&
//       originalRequest.url === "/api/token/refresh/" 
      
//     ) {
      
//       return Promise.reject(error);
//     } else if (error.response.status === 401 || error.response.status === 403) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refresh_token");
//       return axiosInstance
//         .post("/api/token/refresh/", { refresh: refreshToken })
//         .then((res) => {
//           if (res.status === 201 || res.status === 200) {
//             localStorage.setItem("access_token", res.data.access);
//             axiosInstance.defaults.headers["Authorization"] =
//               "Bearer " + res.data.access;
//             originalRequest.headers["Authorization"] =
//               "Bearer " + res.data.access;
//             return axiosInstance(originalRequest);
//           }
//         })
//         .catch((err) => {
//           console.log(err.response);
//         });
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default axiosInstance;

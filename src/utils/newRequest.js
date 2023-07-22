import axios from "axios"

const newRequest = axios.create({
    baseURL:"http://localhost:8800/api/"
})

// newRequest.interceptors.request.use((req) => {
//     if (localStorage.getItem("currentUser")) {
//         req.headers.Authorization = "Bearer" + localStorage.getItem("currentUser");
//     }
//     console.log("not the if of interseptor");
//     return req; 
// });

export default newRequest 
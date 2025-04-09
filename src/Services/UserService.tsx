import axiosInstance from "../interceptor/AxiosInterceptor";

const registerUser = async(user:any)=>{
    return axiosInstance.post(`/users/register`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser = async(login:any)=>{
    return axiosInstance.post(`/users/login`, login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const sendOtp = async (email:string) => {
    return axiosInstance.post(`/users/sendOtp/${email}`)
        .then(result => result.data)
        .catch(error => {throw error;});
}



const verifyOtp = async (email: string, otp: string) => {
    return axiosInstance.get(`/users/verifyOtp/${email}/${otp}`)
        .then(result => result.data)
        .catch(error => {throw error;});
}


const changePassword = async (email:string, password:string) => {
    return axiosInstance.post(`/users/changePassword`, {email, password})
        .then(result => result.data)
        .catch(error => {throw error;});
}

export {registerUser, loginUser, sendOtp, verifyOtp, changePassword};
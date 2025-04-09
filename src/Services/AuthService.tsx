import axiosInstance from "../interceptor/AxiosInterceptor";
import { removeUser } from "../Slices/UserSlice";

const loginUser = async(login:any)=>{
    return axiosInstance.post(`/auth/login`, login)
        .then(result => result.data)
        .catch(error=>{throw error;});
}

const navigateToLogin=(navigate:any)=>{
    localStorage.removeItem("token");
    removeUser();
    navigate("/login");
}
export { loginUser, navigateToLogin };
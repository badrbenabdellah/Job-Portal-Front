import axiosInstance from '../interceptor/AxiosInterceptor';

const getNotifications = async(id:any)=>{
    return axiosInstance.get(`/notifications/get/${id}`)
        .then(result => result.data)
        .catch(error=>{throw error;});
}

const readNotification = async(id:any)=>{
    return axiosInstance.get(`/notifications/read/${id}`)
        .then(result => result.data)
        .catch(error=>{throw error;});
}

export { getNotifications, readNotification };
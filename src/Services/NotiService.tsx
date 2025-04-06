import axios from 'axios'
const base_url = "http://localhost:8080/notifications/"

const getNotifications = async(id:any)=>{
    return axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error=>{throw error;});
}

const readNotification = async(id:any)=>{
    return axios.get(`${base_url}read/${id}`)
        .then(result => result.data)
        .catch(error=>{throw error;});
}

export { getNotifications, readNotification };
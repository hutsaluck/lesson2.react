import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use(request => {
    return request;
})

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}
let getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response) => response.data)
};

export {getAllUsers, getPostsOfUserById}
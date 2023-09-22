import axiosClient from "./AxiosClient";

const userApi = {
    getAll: (params) => {
        return axiosClient.get("/public/v2/users");
    },
    getById: (id) => {
        return axiosClient.get(`/public/v2/users/${id}`);
    },
    delete: (id) => {
        return axiosClient.delete(`/public/v2/users/${id}`);
    },
    create: (user) => {
        return axiosClient.post(`/public/v2/users`,user);
    }, 
    update: (user) => {
        return axiosClient.put(`/public/v2/users/${user.id}`,user);
    }
}
export default userApi;

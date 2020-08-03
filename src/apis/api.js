import axios from "axios";

export const userApi = axios.create({
    baseURL: "https://scentlab-user.herokuapp.com/api"
})

export const perfumeApi = axios.create({
    baseURL: "https://scentlab-perfume.herokuapp.com/perfumes"
})

export const bookingApi = axios.create({
    baseURL: "https://scenlab-booking.herokuapp.com"
    // baseURL: "http://localhost:8084"
})

export const notificationApi = axios.create({
    baseURL: "https://scenlab-booking.herokuapp.com/notifications"
})
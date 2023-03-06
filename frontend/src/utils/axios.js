import axios from "axios"

const accessToken = localStorage.getItem('access_token')

const customFetch = axios.create({
    baseURL: "http://localhost:4000/api/",
    headers: {
        Authorization: `bearer ${accessToken}`
    }
})

export default customFetch;
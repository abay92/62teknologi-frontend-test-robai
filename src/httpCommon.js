import Axios from 'axios';

const axiosBaseURL = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosBaseURL
import Axios from 'axios';

const axiosBaseURL = Axios.create({
    baseURL: 'http://62teknologi-backend-test-robai.test',
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosBaseURL
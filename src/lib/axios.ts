import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_URL;

export default axios;

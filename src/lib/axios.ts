import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = publicRuntimeConfig.backendUrl;

export default axios;

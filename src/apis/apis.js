import axios from 'axios';

// 创建axios实例
const apiClient = axios.create({
    baseURL: 'new',
    timeout: 60000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器
apiClient.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，比如添加统一的token
        // config.headers.Authorization = `Bearer ${store.state.token}`;
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
apiClient.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        return response;
    },
    error => {
        // 对响应错误做些什么
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 处理未授权
                    break;
                case 404:
                    // 处理资源未找到
                    break;
                // 处理其他状态码
                default:
                // 默认错误处理
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;

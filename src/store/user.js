import { defineStore } from 'pinia';
import { ref } from "vue";
import axios from "axios";
import router from "@/router/index.js";
import { ElNotification } from 'element-plus'

export const useUserStore = defineStore('user', () => {
    const isAuthenticated = ref(false);
    const token = ref(null)
    const user = ref(null);

    const getToken = () => {
        return token.value;
    };

    const login = (credentials) => {
        // 可以替换为实际的登录逻辑
        axios.post('api/user/dl', {credentials}).then(response => {
            isAuthenticated.value = response.data.isAuthenticated;
            if (isAuthenticated.value) {
                ElNotification({
                    title: 'Success',
                    message: '登录成功！',
                    type: 'success',
                })
                user.value = credentials.value.username
                token.value = response.data.token;
                console.log(token.value)
                router.push('/home');
            } else {
                ElNotification({
                    title: 'Error',
                    message: '登录失败！',
                    type: 'error',
                })
            }
        }).catch(error => {
            console.error(error);
        });
    };

    const logout = () => {
        isAuthenticated.value = false;
        user.value = null;
        token.value = null;
        router.push('/login')
        // 清除任何存储的 token 或其他认证信息
    };
    return {
        isAuthenticated,
        user,
        token,
        getToken,
        login,
        logout
    };
},{
    persist: true
});
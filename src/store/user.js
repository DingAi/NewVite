import { defineStore } from 'pinia';
import { ref } from "vue";
import axios from "axios";
import router from "@/router/index.js";

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
                alert('登录成功');
                user.value = credentials.value.username
                token.value = response.data.token;
                console.log(token.value)
                router.push('/home');
            } else {
                alert('登录失败');
            }
        }).catch(error => {
            console.error(error);
            alert('登录请求失败');
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
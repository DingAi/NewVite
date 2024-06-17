import { defineStore } from 'pinia';
import { ref } from "vue";
import axios from "axios";
import router from "@/router/index.js";
import {ElMessage, ElNotification} from 'element-plus'

const openVn = () => {
    ElMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    })
}

export const useUserStore = defineStore('user', () => {
    const isAuthenticated = ref(false);
    const token = ref(null)
    const user = ref(null);

    const getToken = () => {
        return token.value;
    };

    const login = async (credentials) => {
        axios.post('new/user/user/dl', {credentials}).then(response => {
            isAuthenticated.value = response.data.isAuthenticated;
            if (isAuthenticated.value) {
                ElNotification({
                    title: 'Success',
                    message: '登录成功！',
                    type: 'success',
                    offset: 100
                })
                user.value = credentials.value.username
                token.value = response.data.token;
                console.log(token.value)
                router.push('/');
            } else {
                ElNotification({
                    title: 'Error',
                    message: '登录失败！',
                    type: 'error',
                    offset: 100
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
        router.push('/login');
        location.reload();
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
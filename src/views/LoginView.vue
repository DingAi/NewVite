<template>
    <div class="full">
        <div class="login-container">
            <el-card class="login-card text-center">
                <div class="logo-container">
                </div>
                <h2 class="login-title">LOGIN</h2>
                <el-text>传感器数据平台</el-text>
                <el-form ref="loginForm" :model="loginData" class="login-form">
                    <el-form-item prop="username">
                        <el-input
                                v-model="loginData.username"
                                placeholder="Username"
                                class="input"
                                @keydown.enter="login"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                                v-model="loginData.password"
                                placeholder="Password"
                                show-password
                                class="input"
                                @keydown.enter="login"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login" class="button">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
            <h1>{{ responseData }}</h1>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useUserStore} from "@/store/user.js";

const loginData = ref({
    username: "",
    password: "",
})

// const ruleFormRef = ref()
// const loginData = reactive({
//     pass: '',
//     username: '',
// })
// const rules = reactive({
//     password: [{ validator: validatePass, trigger: 'blur' }],
//     username: [{ validator: validateUsername, trigger: 'blur' }],
// })


let responseData = ref('')
const useUser = useUserStore()

function login() {
    useUser.login(loginData)
}
//
// const validateUsername = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('请输入用户名;'))
//     } else {
//         callback()
//     }
// }
//
// const validatePass = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('请输入密码;'))
//     } else {
//         if (loginData.value.username !== '') {
//             if (!ruleFormRef.value) return
//             ruleFormRef.value.validateField('checkPass', () => null)
//         }
//         callback()
//     }
// }

</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.login-card {
    margin-bottom: 10%;
    width: 400px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(to right, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}

.login-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #0d6efd;
}

.login-form {
    margin-top: 20px;
}

.input {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.button {
    width: 100%;
    background: #0d6efd;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

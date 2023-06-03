<template>
    <el-row class="login-conter">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div class="left-t">欢迎回来</div>
                <div class="left-b">这里是张先生的店，欢迎您的访问，查看网页源代码请
                    <a href="" class="text-blue-200">点击这里</a>
                </div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h1 class="right-t">欢迎回来</h1>
            <div class="right-b">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <el-form ref="fromRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名">
                    <template #prefix>
                        <el-icon class="el-input__icon"><User /></el-icon>
                    </template>
                </el-input>
                </el-form-item>
                <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
                    <template #prefix>
                        <el-icon><Lock /></el-icon>
                    </template>
                </el-input>
                </el-form-item>
                <el-form-item>
                <el-button color="#6366f1" round type="primary" @click="onSubmit"  class="w-[250px]">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref,reactive } from 'vue'

const form = reactive({
  username: '',
  password:''
})
const rules = {
    username:[
        {
            required: true,
            message:'用户名不能为空',
            trigger: 'blur'
        }
    ],
    password:[
        {
            required: true,
            message:'密码不能为空',
            trigger: 'blur'
        }
    ]
}
const fromRef = ref(null)
const onSubmit = () => {
    fromRef.value.validate((valid) => {
        if(!valid) {
            return false
        }
        console.log('验证通过');
    })
}
</script>

<style lang="less">
.login-conter {
    @apply bg-indigo-500 min-h-screen;
    .left {
        @apply flex justify-center items-center flex-col;
        .left-t {
            @apply text-light-50 font-bold text-6xl mb-4;
        }
        .left-b {
            @apply text-gray-50 text-xl;
        }
    }
    .right {
        @apply bg-light-50 flex justify-center items-center flex-col;
        .right-t {
            @apply text-indigo-500 text-3xl mb-5;
        }
        .right-b {
            @apply flex justify-center items-center text-gray-500 my-3;
        }
    }
}
</style>
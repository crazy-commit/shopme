<template>
    <el-row class="bg-indigo-500 min-h-screen">
        <el-col :span="16" class="flex justify-center items-center flex-col">
            <div>
                <div class="text-light-50 font-bold text-6xl mb-4">欢迎回来</div>
                <div class="text-gray-50 text-xl">这里是张先生的店，欢迎您的访问，查看网页源代码请<a href="" class="text-blue-200">点击这里</a></div>
            </div>
        </el-col>
        <el-col :span="8" class="bg-light-50 flex justify-center items-center flex-col">
            <h1 class="text-indigo-500 text-3xl mb-5">欢迎回来</h1>
            <div class="flex justify-center items-center text-gray-500 my-3">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <el-form :model="form" class="w-[250px]">
                <el-form-item>
                <el-input v-model="form.username" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item>
                <el-input v-model="form.password" placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item>
                <el-button color="#6366f1" round type="primary" @click="onSubmit"  class="w-[250px]">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: '',
  password:''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
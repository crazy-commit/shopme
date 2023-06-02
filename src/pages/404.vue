<template>
    <el-col :sm="12" :lg="6" style="margin: auto;margin-top: 10%;">
      <el-result
        icon="error"
        title="404"
        sub-title="哎呀～页面走丢了">
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
      </el-result>
  </el-col>
</template>
  
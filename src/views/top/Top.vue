<template>
<el-row class="top">
<el-row :gutter="20">
  <el-col :span="6" :offset="6">
      <a class="grid-content">首页</a>
  </el-col>
  <el-col :span="4" :offset="6">
      <div class="grid-content">
          <router-link class="goto" to="/sign">个人中心</router-link>
          <router-link class="goto" to="/sign">登陆</router-link>
      </div>
  </el-col>
</el-row>
</el-row>
</template>
<script>
export default {
data() {
    return{

    }
},
computed: {
}
};
</script>
<style lang="sass">
@import '../../sass/top/top.sass'
</style>
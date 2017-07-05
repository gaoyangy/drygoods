<template>
<el-row class="top">
<el-row :gutter="20">
  <el-col :span="6" :offset="4">
      <router-link class="goto" to="/">首页</router-link>
  </el-col>
  <el-col :span="5" :offset="4">
      <div class="grid-content">
          <router-link v-if="token" class="goto" to="/addArticle/list">发表文章</router-link>
          <router-link v-if="token" class="goto" to="/editArticle">修改文章</router-link>
          <router-link v-if="token" class="goto" to="/recent">最近动态</router-link>
          <router-link v-if="!token" class="goto" to="/sign">登陆</router-link>
      </div>
  </el-col>
</el-row>
</el-row>
</template>
<script>
export default {
data() {
    return{
        token:"",

    }
},
computed: {
},
watch:{

},
mounted(){
        const token = sessionStorage.getItem('access-token')
        if(token&&token!=null){
            this.token=token;
        }
}
};
</script>
<style lang="sass">
@import '../../sass/top/top.sass'
</style>
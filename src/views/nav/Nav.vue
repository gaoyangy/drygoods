<template>
<div class="nav">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="发表文章" name="first">发表文章</el-tab-pane>
        <el-tab-pane label="修改文章" name="second">修改文章</el-tab-pane>
        <el-tab-pane label="最近动态" name="third">最近动态</el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
export default {
name: 'nav',
data() {
    return{
        activeName2: 'first'
    }
},
computed: {
},
methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>
<style lang="sass">
@import '../../sass/nav/nav.sass'
</style>
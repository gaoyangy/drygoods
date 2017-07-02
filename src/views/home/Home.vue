<template>
      <el-row type="flex" class="row-bg home">
        <el-col :span="16" :offset="4">
            <div class="article-list" v-for="item in articleList">
              <div class="article-header">
                <h3 class="article-title">标题：{{item.name}}</h3>
                <div class="article-info">
                  标签：
                  <el-tag
                      v-for="tag in item.tag"
                      :key="tag.text"
                      type="success"
                    >
                  {{tag.text}}
                  </el-tag>
                </div>
              </div>
              <div class="article-content">
                {{item.content}}
              </div>
            </div>
        </el-col>
      </el-row>
</template>
<script>
export default {
data() {
    return{
        articleList:[]
    }
},
computed: {

},
mounted(){
  this.$http.get("/list").then((data)=>{
    this.articleList=data.data;
    console.log(data)
  })
}

};
</script>
<style lang="sass">
@import '../../sass/home/home.sass'
</style>
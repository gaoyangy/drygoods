<template>
      <el-row type="flex" class="row-bg home">
        <el-col :span="16" :offset="4">
            <div class="article-list" v-for="item in articleList">
              <div class="article-header">
                <h3 class="article-title">标题：{{item.title}}</h3>
                <div class="article-info">
                  标签：
                  <el-tag
                      v-for="tag in item.info"
                      :key="tag.text"
                      color="#13ce66"
                    >
                  {{tag.text}}
                  </el-tag>
                </div>
              </div>
              <div class="article-content">
                文章内容：
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
        articleList:[
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"},
          {title:"12212112",info:[{text:"node",value:"1"}],content:"content456456456456456"}
        ]
    }
},
computed: {
}
};
</script>
<style lang="sass">
@import '../../sass/home/home.sass'
</style>
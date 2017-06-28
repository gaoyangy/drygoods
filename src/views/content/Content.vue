<template>
   <el-row>
  <el-col :span="24">
      <div class="grid-content bg-purple-dark">
      <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
      
      </div></el-col>

<el-row :gutter="20">

  <el-col :span="20"><div class="grid-content bg-purple">
      <div v-for="o in 20" :key="o" class="text item">
    {{'列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容 ' + o }}
  </div>
      </div></el-col>

</el-row>
      
</el-row>




</template>
<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
name:'Content'
export default {
  
}
</script>


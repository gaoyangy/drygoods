<template>


  <div id="app">
 <div class="Top">
  <div class="cont"> 
 <el-menu :default-active="activeIndex2" class="el-menu-demo left" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"></el-menu-item>
  <el-menu-item index="2"><router-link to="/index">首页</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/special">专题</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/find">发现</router-link></el-menu-item>
  <el-menu-item index="5">
  <el-input
  placeholder="搜索"
  icon="search"
  v-model="input2"
  :on-icon-click="handleIconClick">
</el-input>

  </el-menu-item>

</el-menu>
<el-menu :default-active="activeIndex2" class="el-menu-demo right" mode="horizontal" @select="handleSelect">
  <el-menu-item index="6" class="login" ><el-button type="text" @click="dialogVisible = true">登陆</el-button></el-menu-item>
  <el-menu-item index="7" class="reg">注册</el-menu-item>
</el-menu>
<el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
    

      <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <div class="loginwith">
      
      <el-row>
        <div>
        <el-input
          v-model="account"
          placeholder="账号"
          type="text">
        </el-input>
        </div>
         <div>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password"
          @keyup.enter.native="loginToDo">
        </el-input>
        </div>
         <div>
        <el-button type="primary" @click="loginToDo">登录</el-button>
        </div>
      </el-row>
      </div>
    </el-col>
  </el-row>


   



  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>

 



</div>
<div class="Cont">

  <el-col :span="16"><div class="grid-content bg-purple pianleft"> <router-view name="content"></router-view></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"><router-view name="right"></router-view></div></el-col>


</div>
   
     

  </div>
</template>

<script>
export default {
  name: 'app',
   data() {
    return {
        activeIndex: '1',
        activeIndex2: '1',
      input2: '',
        dialogVisible: false,
           account: '',
      password: ''
      
    }
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
         loginToDo() {
      let obj = {
        name: this.account,
        password: this.password
      }
      this.$http.post('/auth/user', obj) // 将信息发送给后端
        .then((res) => {
          console.log(res);
          if(res.data.success){ // 如果成功
            sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
            this.$message({ // 登录成功，显示提示语
              type: 'success',
              message: '登录成功！'
            });
            this.$router.push('/todolist') // 进入todolist页面，登录成功
          }else{
            this.$message.error(res.data.info); // 登录失败，显示提示语
            sessionStorage.setItem('demo-token',null); // 将token清空
          }
        }, (err) => {
            this.$message.error('请求错误！')
            sessionStorage.setItem('demo-token',null); // 将token清空
        })
    }
    
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  
  /*margin-top: 60px;*/
}
.Top{
  background-color: #eef1f6;
  width: 100%;
 
  position: fixed;
  z-index: 11;
  
}
.cont{
      width: 960px;
      height: 60px;
      line-height: 60px;
      margin: 0 auto;
      background-color: #eef1f6;
 
}
.Cont{
   position: absolute;
left: 50%;
width: 980px;
margin-left: -480px;
margin-top: 80px;

}
.left{
  float: left
}
.right{
  float: right
}

.logoimg{
	margin-top: 14px;
	width: 30px;
	height: 30px;
	line-height: 70px;
}
</style>
